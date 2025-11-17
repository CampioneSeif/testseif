import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  promoSubscriptionSchema,
  PromoSubscriptionFormData,
} from '@/validations/promotion/validationSchemas';
import { useSaveDraftMutation, useDeleteDraftMutation, useGetDraftByIdQuery } from '@/services/DraftApi';

export const useDraftEdit = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const draftId = params.draftId as string;

  // State for delete confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Fetch the draft data
  const { data: draft, isLoading: isLoadingDraft } = useGetDraftByIdQuery(draftId);

  // RTK Query mutations
  const [saveDraft, { isLoading: isSavingDraft }] = useSaveDraftMutation();
  const [deleteDraft, { isLoading: isDeletingDraft }] = useDeleteDraftMutation();

  // Form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PromoSubscriptionFormData>({
    resolver: yupResolver(promoSubscriptionSchema),
    mode: 'onBlur',
    defaultValues: {
      dateStock: '',
      quantite: 1,
      conditionnement: 'Unité',
      files: [],
    },
  });

  // Reset form with draft data when loaded
  useEffect(() => {
    if (draft) {
      reset(draft.formData);
    }
  }, [draft, reset]);

  // Handlers
  const onSubmit = async (formData: PromoSubscriptionFormData) => {
    if (!draft) return;
    try {
      await saveDraft({
        id: draft.id,
        status: draft.status,
        promoName: draft.promoName,
        promoPrice: draft.promoPrice,
        promoDiscount: draft.promoDiscount,
        promoImage: draft.promoImage,
        originalPrice: draft.originalPrice,
        discountedPrice: draft.discountedPrice,
        savings: draft.savings,
        formData: formData,
        brandLogo: draft.brandLogo,
        promotionId:  draft.promotionId
      }).unwrap();

      Alert.alert(
        'Modifications enregistrées',
        'Vos modifications ont été enregistrées avec succès',
        [
          {
            text: 'OK',
            onPress: () => router.back(),
          },
        ]
      );
    } catch (error) {
      console.error('Error saving draft:', error);
      Alert.alert('Erreur', 'Impossible d\'enregistrer les modifications', [{ text: 'OK' }]);
    }
  };

  const handleSave = handleSubmit(onSubmit);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteDraft(draftId).unwrap();
      setShowDeleteModal(false);
      // Navigate to middle tab (draft list)
      router.replace('/(tabs)/middle');
    } catch (error) {
      console.error('Error deleting draft:', error);
      setShowDeleteModal(false);
      Alert.alert('Erreur', 'Impossible de supprimer le brouillon');
    }
  };

  return {
    // Draft data
    draft,
    isLoadingDraft,
    // Form
    control,
    handleSubmit,
    errors,
    isSubmitting,
    // State
    isSavingDraft,
    isDeletingDraft,
    showDeleteModal,
    // Handlers
    handleSave,
    handleDelete,
    confirmDelete,
    closeDeleteModal: () => setShowDeleteModal(false),
  };
};
