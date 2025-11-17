import { useState } from 'react';
import { Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  promoSubscriptionSchema,
  PromoSubscriptionFormData,
} from '@/validations/promotion/validationSchemas';
import { useSaveDraftMutation } from '@/services/DraftApi';
import { useCreateShopSubscriptionMutation } from '@/services/PromotionApi';
import { FileUpload, RTKQueryError } from '@/types/api';

export const usePromoConfirmation = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Extract promo params
  const promoName = (params.name as string) || 'Produit';
  const promoPrice = (params.basePrice as string) || '0 Dt';
  const promoDiscount = (params.discount as string) || '-0%';
  const promoImage = (params.image as string) || '';
  const brandLogo = (params.brandLogo as string) || undefined;
  const promotionId = (params.promotionId as string) || '';

  // Calculate prices
  const originalPrice = parseFloat(promoPrice.replace(' Dt', ''));
  const discountedPrice = parseFloat(params.discountedPrice as string);
  const savings = parseFloat(params.savings as string);
  const [showValidationSlider, setShowValidationSlider] = useState<boolean>(false);
  const [saveDraft, { isLoading: isSavingDraft }] = useSaveDraftMutation();
  const [createShopSubscription, { isLoading: isSubmittingSubscription }] = useCreateShopSubscriptionMutation();
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
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

  // Handlers
  const handleSave = async () => {
    // Get current form values (even if not validated)
    const formValues = control._formValues;

    try {
      await saveDraft({
        status: 'draft',
        promoName,
        promoPrice,
        promoDiscount,
        promoImage,
        originalPrice,
        discountedPrice,
        savings,
        brandLogo,
        promotionId,
        formData: formValues as PromoSubscriptionFormData,
      }).unwrap();

      Alert.alert(
        'Brouillon sauvegardé',
        'Votre commande a été sauvegardée en brouillon',
        [
          {
            text: 'OK',
            onPress: () => router.back(),
          },
        ]
      );
    } catch (error) {
      console.error('Error saving draft:', error);
      Alert.alert('Erreur', 'Impossible de sauvegarder le brouillon', [{ text: 'OK' }]);
    }
  };

  const onSubmit = async (data: PromoSubscriptionFormData) => {
    console.log('Form submitted:', data);
    
    try {
      // Create FormData
      const formData = new FormData();
      // Add promotion and product IDs
      formData.append('promotion_product_id', promotionId);
      
      // Add stock date (convert from DD/MM/YYYY to YYYY-MM-DD)
      const [day, month, year] = data.dateStock.split('/');
      const stockDate = `${year}-${month}-${day}`;
      formData.append('stock_date', stockDate);
      
      // Add claimed quantity
      formData.append('claimed_quantity', data.quantite.toString());
      
      // Add files
      if (data.files && data.files.length > 0) {
        data.files.forEach((file: FileUpload) => {
          const fileToUpload = {
            uri: file.uri,
            type: file.mimeType,
            name: file.name,
          } as const;
          formData.append('files', fileToUpload as unknown as Blob);
        });
      }
      
      // Submit the subscription
      await createShopSubscription(formData).unwrap();
      setErrorMessage('')
      // Show success slider only if submission succeeds
      setShowValidationSlider(true);
    } catch (error) {
      console.error('Error creating shop subscription:', error);
      
      // Handle error with proper TypeScript typing
      let errorMessage = 'Une erreur est survenue';
      if (error && typeof error === 'object' && 'data' in error) {
        const rtqError = error as RTKQueryError;
        if (rtqError.data && typeof rtqError.data.message === 'string') {
          errorMessage = rtqError.data.message;
        }
      }
      
      setErrorMessage(errorMessage);
     // Alert.alert('Erreur', 'Impossible de soumettre la souscription', [{ text: 'OK' }]);
    }
  };

  return {
    // Promo data
    promoName,
    promoPrice,
    promoDiscount,
    promoImage,
    brandLogo,
    originalPrice,
    discountedPrice,
    savings,
    // Form
    control,
    handleSubmit,
    errors,
    isSubmitting,
    // State
    showValidationSlider,
    setShowValidationSlider,
    isSavingDraft,
    isSubmittingSubscription,
    // Handlers
    handleSave,
    onSubmit,
    errorMessage,
    clearErrorMessage: () => setErrorMessage(''),
  };
};
