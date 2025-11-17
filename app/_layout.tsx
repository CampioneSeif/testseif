import '@/theme';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Animated } from 'react-native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import { Provider } from 'react-redux';
import { store } from '@/lib/slices/store';
import AuthGuard from '@/components/guard';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [showCustomSplash, setShowCustomSplash] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(1));

  const [fontsLoaded, fontError] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Inter: require('../assets/fonts/Inter_28pt-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (fontError) {
      console.error('Font loading error:', fontError);
      throw fontError;
    }
  }, [fontError]);

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();

        // Wait 2 seconds then fade out custom splash
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start(() => {
            setShowCustomSplash(false);
          });
        }, 2000);
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (showCustomSplash) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]}>
        <Image
          source={require('../assets/images/logo-promo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    );
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AuthGuard>
          <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="otp" options={{ headerShown: false }} />
            <Stack.Screen name="completeProfile" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="promoConfirmation" options={{ headerShown: false }} />
            <Stack.Screen name="draftDetail" options={{ headerShown: false }} />
            <Stack.Screen name="editDraft" options={{ headerShown: false }} />
            <Stack.Screen name="orderDetail" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </AuthGuard>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#e50c1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    height: '25%',
  },
});
