import { useAppSelector } from '@/hooks/HookRedux';
import { useVerifyUserQuery } from '@/services/AuthApi';
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { useEffect, useState } from 'react';
import { storage } from '@/lib/storage';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [hasToken, setHasToken] = useState<boolean | null>(null);
  const { isAuth, user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  // Only run verifyUser query if token exists
  const { isLoading, isError } = useVerifyUserQuery(undefined, {
    skip: hasToken === false, // Skip query if no token
  });

  // Check for token on mount
  useEffect(() => {
    const checkToken = async () => {
      const token = await storage.getItem('token');
      setHasToken(!!token);
    };
    checkToken();
  }, [isAuth]);

  useEffect(() => {
    // Wait until we know if token exists
    if (hasToken === null) return;

    // Wait for query to finish if token exists
    if (hasToken && isLoading) return;

    console.log('AuthGuard state:', { hasToken, isError, isAuth, user });

    // No token → go to login
    if (!hasToken) {
      router.replace('/login');
      return;
    }
    // Authenticated with complete profile → go to tabs
    if (hasToken && user && user.status === 'ACTIVE') {
      router.replace('/(tabs)');
      return;
    }
    // Token exists but verifyUser returns error (invalid/expired token) → go to login
    if (isError) {
      router.replace('/login');
      return;
    }

    // User exists but full_name is empty → go to completeProfile
    if (user && user.full_name === '') {
      router.replace('/completeProfile');
      return;
    }

    // Not authenticated and verification is done → go to login
    if (!isAuth && !user) {
      router.replace('/login');
      return;
    }
  }, [hasToken, isLoading, isError, isAuth, user, router]);

  // Show loading while checking token or verifying user
  if (hasToken === null || (hasToken && isLoading)) {
    return <Feather name="refresh-cw" size={24} color="white" />;
  }

  // Always render children (Stack with all routes) so navigation can work
  return children;
}
