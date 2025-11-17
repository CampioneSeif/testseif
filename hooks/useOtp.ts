import { useState, useRef, useEffect } from 'react';
import { TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useLoginMutation, useVerifyOtpMutation } from '@/services/AuthApi';
import { storage } from '@/lib/storage';

interface UseOtpReturn {
  phone: string;
  otp: string[];
  error: string | null;
  timeLeft: number;
  isTimerActive: boolean;
  isOtpComplete: boolean;
  showValidationSlider: boolean;
  inputRefs: React.MutableRefObject<Array<TextInput | null>>;
  handleChange: (text: string, index: number) => void;
  handleKeyPress: (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => void;
  handleVerify: () => Promise<void>;
  handleResendCode: () => Promise<void>;
  formatTime: (seconds: number) => string;
  setShowValidationSlider: (show: boolean) => void;
  clearError: () => void;
  isLoginLoading: boolean;
  maxAttempts: boolean;
}

export const useOtp = (): UseOtpReturn => {
  const { phone: phoneParam } = useLocalSearchParams<{ phone: string }>();
  const [phone, setPhone] = useState<string>(phoneParam || '');
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [showValidationSlider, setShowValidationSlider] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [maxAttempts, setMaxAttempts] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5); // 5 seconds timer
  const [isTimerActive, setIsTimerActive] = useState(true);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const router = useRouter();
  const [verifyOtp] = useVerifyOtpMutation();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  // Get phone from storage if not in params
  useEffect(() => {
    const getPhone = async () => {
      if (!phoneParam) {
        const storedPhone = await storage.getItem('phone');
        if (storedPhone) {
          setPhone(storedPhone);
        }
      }
    };
    getPhone();
  }, [phoneParam]);

  const handleChange = (text: string, index: number) => {
    // Only allow numbers
    const numericText = text.replace(/[^0-9]/g, '');

    if (numericText.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = numericText;
      setOtp(newOtp);
      setError(null); // Clear error when user types
      setMaxAttempts(false);
      // Move focus to next field when a digit is entered
      if (numericText && index < 4) {
        inputRefs.current[index + 1]?.focus();
      }
      // Move focus to previous field when current field is cleared
      else if (!numericText && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    // Handle backspace on empty field
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    try {
      const otpString = otp.join('');

      const response = await verifyOtp({ phone, code: otpString, roleCode: 'SHOP' }).unwrap();
      console.log('OTP Verification Response:', response);
      
      // Check if response exists
      if (!response) {
        setError('Réponse invalide du serveur');
        return;
      }

      // Check if firstLogin is false (returning user with active account)
      if (response.firstLogin === false && response.status === 'PENDING') {
        // User has completed profile and is active - show validation slider
        setShowValidationSlider(true);
      } else  if (response.firstLogin === false && response.status === 'ACTIVE') {
        // First-time user or incomplete profile - navigate to complete profile
        router.replace('/(tabs)');
      } else {
        // First-time user or incomplete profile - navigate to complete profile
        router.replace('/completeProfile');
      }
    } catch (err) {
      console.log('OTP Verification Error:', err);
      // Extract error message from RTK Query error
      const error = err as { data?: { errorCode?: string, message?: string | string[] } };
      if (error?.data?.message) {
        const message = Array.isArray(error.data.message)
          ? error.data.message.join(', ')
          : error.data.message;
        if(error.data.errorCode === 'OTP_MAX_ATTEMPTS') {
          setMaxAttempts(true);
          setTimeLeft(60); // 1 minute wait time
          setIsTimerActive(true);
        }
        setError(message);
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.');
      }
    }
  };

  const handleResendCode = async () => {
    try {
      if (!isTimerActive && !isLoginLoading && !maxAttempts) {
        // Reset timer and resend logic here
        setTimeLeft(30);
        setIsTimerActive(true);
        setError(null);
        setMaxAttempts(false);
        setOtp(['', '', '', '', '']);
        inputRefs.current[0]?.focus();
        await login({ phone: phone, roleCode: 'SHOP' }).unwrap();
        // Add your resend OTP logic here
        console.log('Resending OTP code...');
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  // Check if all OTP fields are filled
  const isOtpComplete = otp.every((digit) => digit !== '');

  // Timer effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isTimerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1 && maxAttempts) {
            // Reset maxAttempts when timer expires
            setMaxAttempts(false);
          }
          return time - 1;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerActive(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerActive, timeLeft]);

  useEffect(() => {
    if (phone) {
      inputRefs.current[0]?.focus();
    }
  }, [phone]);

  // Format time to MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const clearError = () => {
    setError(null);
  };

  return {
    phone,
    otp,
    error,
    timeLeft,
    isTimerActive,
    isOtpComplete,
    showValidationSlider,
    inputRefs,
    handleChange,
    handleKeyPress,
    handleVerify,
    handleResendCode,
    formatTime,
    setShowValidationSlider,
    clearError,
    isLoginLoading,
    maxAttempts,
  };
};
