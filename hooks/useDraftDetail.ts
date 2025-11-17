import { useState, useMemo, useEffect } from 'react';
import { useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import {
  useGetDraftByIdQuery,
  useDeleteDraftMutation
} from '@/services/DraftApi';
import { useCreateShopSubscriptionMutation } from '@/services/PromotionApi';
import { PromoDraft } from '@/types/draft';
import { FileUpload, RTKQueryError } from '@/types/api';

export const useDraftDetail = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const draftId = params.draftId as string;
  const source = (params.source as string) || 'drafts'; // 'drafts' or 'transferred'
  const itemData = params.itemData as string;

  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  // Use RTK Query for drafts (always enabled for drafts to allow refetching)
  const {
    data: draftFromQuery,
    isLoading: isDraftQueryLoading,
    refetch: refetchDraft
  } = useGetDraftByIdQuery(draftId, {
    skip: source !== 'drafts' || !draftId,
  });

  const [draft, setDraft] = useState<PromoDraft | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Parse item data from params or use query result
  useEffect(() => {
    if (source === 'drafts') {
      // For drafts, prioritize fresh query data when available, fallback to itemData
      if (draftFromQuery) {
        setDraft(draftFromQuery);
        setIsLoading(false);
      } else if (itemData && !isDraftQueryLoading) {
        // Use passed item data only if query is not loading and no fresh data
        try {
          const parsedItem = JSON.parse(itemData) as PromoDraft;
          setDraft(parsedItem);
          setIsLoading(false);
        } catch (error) {
          console.error('Error parsing item data:', error);
          setDraft(null);
          setIsLoading(false);
        }
      } else {
        // Still loading or no data
        setIsLoading(isDraftQueryLoading);
      }
    } else if (itemData) {
      // For transferred items, use passed item data
      try {
        const parsedItem = JSON.parse(itemData) as PromoDraft;
        setDraft(parsedItem);
        setIsLoading(false);
      } catch (error) {
        console.error('Error parsing item data:', error);
        setDraft(null);
        setIsLoading(false);
      }
    } else {
      // No data available for transferred items without itemData
      setDraft(null);
      setIsLoading(false);
    }
  }, [itemData, source, draftFromQuery, isDraftQueryLoading]);

  // Reload data when screen comes into focus (for all drafts)
  useFocusEffect(
    useCallback(() => {
      if (source === 'drafts' && draftId) {
        refetchDraft();
      }
    }, [source, draftId, refetchDraft])
  );

  const [deleteDraft] = useDeleteDraftMutation();
  const [createShopSubscription, { isLoading: isSubmittingSubscription }] = useCreateShopSubscriptionMutation();

  // Check if draft is ready to be confirmed
  const isDraftReady = useMemo(() => {
    if (!draft) return false;
    const { dateStock, quantite, conditionnement, files } = draft.formData;
    return !!dateStock && !!quantite && !!conditionnement && files && files.length >= 1;
  }, [draft]);

  const handleModify = () => {
    if (source !== 'drafts') return; // Only allow modification for drafts
    router.push({
      pathname: '/editDraft',
      params: { draftId },
    });
  };

  const handleConfirm = async () => {
    if (!draft || source !== 'drafts') return; // Only allow confirmation for drafts
    
    try {
      // If there are files to upload, create FormData and upload them
      if (draft.formData?.files?.length) {
        const formData = new FormData();
        const { dateStock, quantite } = draft.formData;
        formData.append('promotion_product_id', draft.promotionId);

        // Add stock date if available (convert from DD/MM/YYYY to YYYY-MM-DD if needed)
        if (dateStock) {
          const [day, month, year] = dateStock.split('/');
          if (day && month && year) {
            formData.append('stock_date', `${year}-${month}-${day}`);
          }
        }
        
        // Add quantity if available
        if (quantite) {
          formData.append('claimed_quantity', quantite.toString());
        }
        
        // Add files
        draft.formData.files.forEach((file: FileUpload) => {
          const fileToUpload = {
            uri: file.uri,
            type: file.mimeType || 'application/octet-stream',
            name: file.name || 'file',
          } as const;
          formData.append('files', fileToUpload as unknown as Blob);
        });
        
        // Here you would typically call an API endpoint to upload the files
        await createShopSubscription(formData).unwrap();
        setErrorMessage('')
        await deleteDraft(draftId).unwrap();
      }
      
      setSuccessMessage('Votre commande a été transférée avec succès');
      setTimeout(() => {
        router.back();
      }, 2000);
    } catch (error) {
      console.error('Error confirming draft:', error);
      
      // Handle error with proper TypeScript typing
      let errorMessage = 'Une erreur est survenue';
      if (error && typeof error === 'object' && 'data' in error) {
        const rtqError = error as RTKQueryError;
        if (rtqError.data && typeof rtqError.data.message === 'string') {
          errorMessage = rtqError.data.message;
        }
      }
      
      setErrorMessage(errorMessage);
    }
  };

  return {
    // Data
    draft,
    isLoading,
    draftId,
    source,
    // State
    isSubmittingSubscription,
    isDraftReady: source === 'drafts' ? isDraftReady : false, // Only drafts can be ready for confirmation
    successMessage,
    errorMessage,
    // Handlers
    handleModify,
    handleConfirm,
    clearSuccessMessage: () => setSuccessMessage(''),
    clearErrorMessage: () => setErrorMessage(''),
  };
};
