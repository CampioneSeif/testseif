import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useLoginMutation } from '@/services/AuthApi';

interface UseLoginReturn {
  phone: string;
  setPhone: (phone: string) => void;
  errorMessage: string | null;
  isLoading: boolean;
  isValid: boolean;
  handleLogin: () => Promise<void>;
}

export const useLogin = (): UseLoginReturn => {
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const isValid = phone.length === 8 && /^\d{8}$/.test(phone);

  const handleLogin = async () => {
    try {
      setErrorMessage(null);
      
      if (isValid) {
        // Send phone with country code
        const fullPhone = `+216${phone}`;
        await login({ phone: fullPhone, roleCode: 'SHOP' }).unwrap();
        router.push({ pathname: '/otp', params: { phone: fullPhone } });
      }
    } catch (err) {
      // Extract error message from RTK Query error
      const error = err as { data?: { message?: string | string[] } };
      if (error?.data?.message) {
        const message = Array.isArray(error.data.message)
          ? error.data.message.join(', ')
          : error.data.message;
        setErrorMessage(message);
      } else {
        setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
      }
    }
  };

  return {
    phone,
    setPhone,
    errorMessage,
    isLoading,
    isValid,
    handleLogin,
  };
};
