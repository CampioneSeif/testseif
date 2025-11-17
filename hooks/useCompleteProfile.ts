import { useState } from 'react';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  completeProfileSchema,
  CompleteProfileFormData,
} from '@/validations/user/validationSchemas';
import { useCompleteProfileMutation } from '@/services/AuthApi';
import { storage } from '@/lib/storage';

interface FileUpload {
  uri: string;
  type: string;
  name: string;
}

interface FileInfo {
  uri: string;
  name: string;
  mimeType: string;
}

interface ApiError {
  status?: number;
  data?: {
    message?: string | string[];
  };
  error?: string;
}

interface UseCompleteProfileReturn {
  currentStep: number;
  isNavigatingBack: boolean;
  isSubmitting: boolean;
  showValidationSlider: boolean;
  setShowValidationSlider: (show: boolean) => void;
  methods: UseFormReturn<CompleteProfileFormData>;
  handleBack: () => Promise<void>;
  handleNext: () => Promise<void>;
}

export const useCompleteProfile = (): UseCompleteProfileReturn => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isNavigatingBack, setIsNavigatingBack] = useState(false);
  const [showValidationSlider, setShowValidationSlider] = useState(false);
  const [completeProfile, { isLoading: isSubmitting, error } ] = useCompleteProfileMutation();
console.log("error : ", error)
  const handleBack = async () => {
    if (isNavigatingBack) return; // prevent multiple clicks

    setIsNavigatingBack(true);

    if (currentStep === 1) {
      router.replace('/otp');
    } else {
      // simulate a short loading for smooth UX
      setTimeout(() => {
        setCurrentStep(1);
        setIsNavigatingBack(false);
      }, 400);
    }
  };

  const methods = useForm<CompleteProfileFormData>({
    resolver: yupResolver(completeProfileSchema),
    mode: 'onBlur',
    defaultValues: {
      nom: '',
      prenom: '',
      sexe: '',
      dateNaissance: '',
      adresse: '',
      raison: '',
      email: '',
      immatriculeFiscale: '',
      adresseShop: '',
      secteurActivite: [],
      patente: '',
      termsAccepted: false,
    },
  });

  const handleNext = async () => {
    // Validate only the fields for the current step
    const fieldsToValidate: (keyof CompleteProfileFormData)[] =
      currentStep === 1
        ? ['nom', 'prenom', 'sexe', 'dateNaissance', 'adresse', 'email']
        : [
            'raison',
            'immatriculeFiscale',
            'adresseShop',
            'secteurActivite',
            'patente',
            'termsAccepted',
          ];

    const isValid = await methods.trigger(fieldsToValidate);
    if (isValid) {
      if (currentStep === 1) {
        setCurrentStep(2);
      } else {
        methods.handleSubmit(onSubmit)();
      }
    }
  };

  const onSubmit = async (data: CompleteProfileFormData) => {
    try {
      // Create FormData
      const formData = new FormData();
      const phone = await storage.getItem('phone');
      // Map form fields to API fields
      console.log("data : ", data)
      // full_name = nom + prenom
      const fullName = `${data.nom} ${data.prenom}`.trim();
      formData.append('full_name', fullName);

      // role = accountType
      formData.append('role', 'SHOP');

      //phone = phone
      formData.append('phone', phone || '');
      // email
      formData.append('email', data.email);

      // dateOfBirth = dateNaissance (format: DD/MM/YYYY)
      formData.append('dateOfBirth', data.dateNaissance);

      // organizationName = raison
      formData.append('organizationName', data.raison);

      // legalIdentifier = immatriculeFiscale
      formData.append('legalIdentifier', data.immatriculeFiscale);

      // address = adresse
      formData.append('address', data.adresse);

      // addressOrg = adresseShop
      formData.append('addressOrg', data.adresseShop);

      // documentTypesJson = "0"
      formData.append('documentTypesJson', '{"0":"licence"}');

      // sexe
      formData.append('sex', data.sexe);

      // files = [patente] - handle file object or string
      if (data.patente) {
        let fileUpload: FileUpload;
        
        // Check if patente is a file object or just a string
        if (typeof data.patente === 'object' && 'uri' in data.patente) {
          // It's a file object from DocumentPicker
          const fileInfo = data.patente as FileInfo;
          fileUpload = {
            uri: fileInfo.uri,
            type: fileInfo.mimeType || 'application/pdf',
            name: fileInfo.name,
          };
        } else {
          // Fallback for string (shouldn't happen with updated FileUpload component)
          const patenteStr = String(data.patente);
          fileUpload = {
            uri: patenteStr,
            type: 'application/pdf',
            name: patenteStr.split('/').pop() || 'patente.pdf',
          };
        }
        
        formData.append('files', fileUpload as unknown as Blob);
      }

      // sectorIds = secteurActivite[] - append each sector ID
      if (data.secteurActivite && data.secteurActivite.length > 0) {
        data.secteurActivite.forEach((sectorId) => {
          formData.append('sectorIds[]', sectorId);
        });
      }
    
      const response = await completeProfile(formData).unwrap();
      
      console.log('Profile completed successfully:', response);
      
      // Show validation slider instead of alert
      setShowValidationSlider(true);
    } catch (error: unknown) {
      const apiError = error as ApiError;
      // Extract error message
      const errorMessage = apiError?.data?.message 
        ? (Array.isArray(apiError.data.message) 
            ? apiError.data.message.join(', ') 
            : apiError.data.message)
        : apiError?.error === 'TypeError: Network request failed'
        ? 'Erreur de connexion. Vérifiez que le serveur est accessible.'
        : 'Une erreur est survenue lors de la soumission du profil.';
      
      Alert.alert('Erreur', errorMessage);
    }
  };

  return {
    currentStep,
    isNavigatingBack,
    isSubmitting,
    showValidationSlider,
    setShowValidationSlider,
    methods,
    handleBack,
    handleNext,
  };
};
