import React from 'react';
import { StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { View, Button, Text} from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import PhoneCountry from '@/components/common/PhoneCountry';
import { useLogin } from '@/hooks/useLogin';
import LoginBg from '@/assets/svgs/background/LoginSvg';

const LoginScreen = () => {
  const { phone, setPhone, errorMessage, isLoading, isValid, handleLogin } = useLogin();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LoginBg width={120} height={180} style={styles.headerSvg} />
        <Feather
          name="arrow-left-circle"
          size={30}
          color={Colors.white}
          style={styles.headerIcon}
        />
        <Text style={[styles.headerText, { marginBottom: Spacings.s2 }]}>Se connecter</Text>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Bienvenue ,</Text>
          <Text style={styles.subText}>Découvrez toutes nos promos en un seul endroit.</Text>
          <View style={styles.inputContainer}>
            <Text body2 marginB-s2>Numéro de téléphone</Text>
            <PhoneCountry value={phone} onChange={setPhone} />
            {errorMessage && (
              <Text caption color={Colors.error} marginT-s2 marginB-s2>
                {errorMessage}
              </Text>
            )}
            <Button
              label={isLoading ? 'Chargement...' : 'Se connecter'}
              bg-primary
              br40
              marginT-s5
              backgroundColor={Colors.primary}
              disabled={!isValid || isLoading}
              onPress={handleLogin}
              style={(!isValid || isLoading) && styles.buttonDisabled}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.primary },
  header: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    padding: Spacings.s7,
    height: 193,
    position: 'relative',
  },
  headerIcon: {
    marginBottom: Spacings.s5,
  },
  headerSvg: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  backButton: { fontSize: 20, color: Colors.white, marginRight: Spacings.s3 },
  headerText: {
    ...Typography.h3,
    padding: Spacings.s2,
    color: Colors.white,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: Colors.background,
    elevation: 5,
    borderTopLeftRadius: Spacings.s5,
    borderTopRightRadius: Spacings.s5,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: Spacings.s5,
    backgroundColor: Colors.background,
  },
  welcomeText: { ...Typography.h2, marginVertical: Spacings.s3 },
  subText: {
    ...Typography.body1,
    color: Colors.textSecondary,
    marginBottom: Spacings.s5,
  },
  inputContainer: { width: '100%', marginBottom: 0 },
  buttonDisabled: {
    opacity: 0.5,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: Spacings.s6,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.neutral300,
    marginHorizontal: Spacings.s10,
  },
  orText: {
    ...Typography.body1,
    color: Colors.textSecondary,
    marginHorizontal: Spacings.s3,
  },
  googleButton: {
    width: '100%',
    height: 56,
    backgroundColor: Colors.backgroundGrey,
    padding: Spacings.s4,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleIcon: { width: 20, height: 20, marginRight: Spacings.s3 },
  googleButtonText: { ...Typography.button, color: '#222222' },
  signupContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: Spacings.s5,
    alignItems: 'center',
  },
  signupText: {
    ...Typography.body1,
    color: Colors.textSecondary,
  },
  signupLink: {
    ...Typography.body1,
    color: Colors.secondary,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  errorText: {
    ...Typography.caption,
    color: Colors.error,
    marginTop: Spacings.s2,
  },
});

export default LoginScreen;
