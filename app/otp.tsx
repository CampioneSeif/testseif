import React from 'react';
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import TextField from '@/theme/create-component';
import { View, Text, Button } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import LoginBg from '@/assets/svgs/background/LoginSvg';
import BottomSlider from '@/components/common/BottomSlider';
import Check from '@/assets/svgs/Check';
import Toaster from '@/components/common/Toaster';
import { useOtp } from '@/hooks/useOtp';

export default function OTPScreen() {
  const router = useRouter();
  const {
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
    maxAttempts,
  } = useOtp();


  return (
    <View style={styles.container}>
      <View style={styles.header}>
                <LoginBg width={120} height={180} style={styles.headerSvg} />
  
       {error ? (
          <Toaster
            message={error}
            onClose={clearError}
            type="error"
          />
        ) : <Feather
          name="arrow-left-circle"
          size={30}
          color={Colors.white}
          style={styles.headerIcon}
          onPress={() => router.replace("/login")}
        />}
        <Text style={[styles.headerText, { marginBottom: Spacings.s2 }]}>Se connecter</Text>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Enter OTP Code</Text>
        <Text style={styles.subtitle}>
          {phone ? `Nous avons envoyé un code à ${phone.slice(0, -3) + '***'}` : 'Nous avons envoyé un code à votre numéro'}
        </Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <View key={index} style={styles.otpInputWrapper}>
              <TextField
                placeholder=""
                floatingPlaceholder={false}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                enableErrors={false}
                value={digit}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                keyboardType="number-pad"
                maxLength={1}
                // Pass custom styles directly to TextField
                containerStyle={styles.textFieldContainer}
                inputStyle={[
                  styles.textFieldInput,
                  digit && styles.activeInput,
                  error && styles.errorInput,
                  maxAttempts && styles.disabledInput,
                ]}
              />
            </View>
          ))}
        </View>

        <Button
          label="Vérifier"
          bg-primary
          br40
          marginB-s3
          disabled={!isOtpComplete || maxAttempts}
          onPress={handleVerify}
          style={[styles.button, (!isOtpComplete || maxAttempts) && styles.buttonDisabled]}
        />

        {/* Text 1: Vous n'avez pas reçu le code OTP ? */}
        {!maxAttempts && <Text body2 center marginB-s3>Vous n'avez pas reçu le code OTP ?</Text>}

        {/* Text 2: Timer or Resend option */}
        {maxAttempts ? (
          <View style={styles.maxAttemptsContainer}>
            <Text body2 center color={Colors.error} marginB-s2>
              Trop de tentatives. Veuillez patienter.
            </Text>
            <View style={styles.timerContainer}>
              <AntDesign name="clock-circle" size={16} color={Colors.error} />
              <Text body2 color={Colors.error}>{formatTime(timeLeft)}</Text>
            </View>
          </View>
        ) : isTimerActive ? (
          <View style={styles.timerContainer}>
            <AntDesign name="clock-circle" size={16} color={Colors.textSecondary} />
            <Text body2 textSecondary>{formatTime(timeLeft)}</Text>
          </View>
        ) : (
          <Text body2 textSecondary center onPress={handleResendCode} style={styles.resendText}>
            Renvoyer le code OTP
          </Text>
        )}
      </View>

      <BottomSlider
        visible={showValidationSlider}
        onClose={() => {
          setShowValidationSlider(false);
          //router.replace('/(tabs)');
        }}
        icon={<Check width={74} height={74} />}
        title="Votre compte est en cours de validation"
        subtitle="Merci de patienter, nous vérifions vos informations"
        buttonText="Got it!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
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
  headerText: {
    ...Typography.h3,
    padding: Spacings.s2,
    color: Colors.white,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
    borderTopLeftRadius: Spacings.s5,
    borderTopRightRadius: Spacings.s5,
    overflow: 'hidden',
  },
  title: {
    marginTop: 15,
    ...Typography.h3,
    marginBottom: Spacings.s4,
  },
  subtitle: {
    ...Typography.body1,
    color: Colors.textSecondary,
    marginBottom: 60,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 60,
    gap: Spacings.s3,
  },
  otpInputWrapper: {
    flex: 1,
    minHeight: 60,
  },
  textFieldContainer: {
    marginBottom: 0, // Override the default margin
    height: 57,
  },
  textFieldInput: {
    height: 57,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: Colors.neutral300,
    borderRadius: Spacings.s2,
    padding: 0, // Remove padding for centered text
    backgroundColor: Colors.white,
  },
  activeInput: {
    borderColor: Colors.black, // Black border when active
  },
  errorInput: {
    borderColor: Colors.error, // Red border when error
  },
  errorText: {
    ...Typography.caption,
    color: Colors.error,
    textAlign: 'center',
    marginBottom: Spacings.s4,
  },
  button: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonDisabled: {
    opacity: 0.5,
    shadowOpacity: 0,
    elevation: 0,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  maxAttemptsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledInput: {
    backgroundColor: Colors.neutral200,
    opacity: 0.6,
  },
  resendText: {
    textDecorationLine: 'underline',
  },
});
