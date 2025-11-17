import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, Button } from 'react-native-ui-lib';
import { Colors, Spacings } from '@/theme';
import { useRouter } from 'expo-router';
import LoginBg from '@/assets/svgs/background/LoginSvg';
import Feather from '@expo/vector-icons/Feather';
import { FormProvider } from 'react-hook-form';
import Step1 from '@/components/StepProfile/Step1';
import Step2 from '@/components/StepProfile/Step2';
import ProgressPoint from '@/assets/svgs/profile/ProgressPoint';
import BottomSlider from '@/components/common/BottomSlider';
import Check from '@/assets/svgs/Check';
import { useCompleteProfile } from '@/hooks/useCompleteProfile';

const CompleteProfile = () => {
  const router = useRouter();
  const { 
    currentStep, 
    isNavigatingBack, 
    isSubmitting, 
    showValidationSlider, 
    setShowValidationSlider, 
    methods, 
    handleBack, 
    handleNext 
  } = useCompleteProfile();

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <View style={styles.header}>
          <LoginBg width={120} height={180} style={styles.headerSvg} />
          <TouchableOpacity
            onPress={handleBack}
            disabled={isNavigatingBack}
            activeOpacity={0.6}
            style={{ opacity: isNavigatingBack ? 0.6 : 1 }}
          >
            <Feather name="arrow-left-circle" size={50} color={Colors.white} />
          </TouchableOpacity>
          <View style={styles.progressContainer}>
            <View style={styles.progressBarContainer}>
              <View style={styles.singleProgressContainer}>
                {/* Wrapper to contain both bar and circle */}
                <View style={styles.progressBarWrapper}>
                  {/* Background bar */}
                  <View style={styles.progressBarBackground}>
                    <View
                      style={[styles.progressBarFill, { width: `${currentStep === 1 ? 30 : 75}%` }]}
                    />
                  </View>

                  {/* Circle ABOVE the bar */}
                  <View
                    style={[
                      styles.progressPointWrapper,
                      { left: `${currentStep === 1 ? 30 : 75}%` },
                    ]}
                  >
                    <ProgressPoint width={30} height={30} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.content}>
            <Text h2 marginV-s3>
              {currentStep === 1 ? 'Informations personnelles' : 'Informations professionnelles'}
            </Text>
            <Text body1 textSecondary marginB-s5>
              {currentStep === 1
                ? 'Merci de renseigner vos informations pour créer votre compte.'
                : 'Complétez vos informations professionnelles.'}
            </Text>

            <View style={styles.formContainer}>
              {currentStep === 1 ? (
                <Step1 control={methods.control} errors={methods.formState.errors} />
              ) : (
                <Step2 control={methods.control} errors={methods.formState.errors} />
              )}
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              label={isSubmitting ? 'Envoi en cours...' : (currentStep === 1 ? 'Suivant' : 'Terminer')}
              bg-primary
              br40
              onPress={handleNext}
              disabled={isSubmitting}
              style={[styles.nextButton, isSubmitting && styles.buttonDisabled]}
            />
          </View>
        </View>
      </View>

      <BottomSlider
        visible={showValidationSlider}
        onClose={() => {
          setShowValidationSlider(false);
          router.replace('/login');
        }}
        icon={<Check width={74} height={74} />}
        title="Votre compte est en cours de validation"
        subtitle="Merci de patienter, nous vérifions vos informations"
        buttonText="Got it!"
      />
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacings.s5,
    backgroundColor: Colors.primary,
    padding: Spacings.s9,
    height: 140,
    position: 'relative',
  },
  headerSvg: {
    position: 'absolute',
    top: 0,
    right: 0,
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
  progressContainer: {
    marginBottom: Spacings.s5,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: Spacings.s9,
    marginLeft: '5%',
    zIndex: 1,
  },
  singleProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: Spacings.s3,
    position: 'relative', // <-- very important
  },
  progressBarWrapper: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },

  progressBarBackground: {
    height: 8,
    backgroundColor: Colors.neutral300,
    borderRadius: 4,
    overflow: 'hidden', // keep this so fill stays inside
  },

  progressPointWrapper: {
    position: 'absolute',
    top: '50%',
    transform: [
      { translateY: -15 }, // center vertically (30 / 2)
      { translateX: -15 }, // center horizontally (30 / 2)
    ],
    zIndex: 2,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.secondary,
    borderRadius: 4,
  },
  formContainer: {
    flex: 1,
  },
  buttonContainer: {
    padding: Spacings.s5,
    backgroundColor: Colors.background,
  },
  nextButton: {
    width: '100%',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});

export default CompleteProfile;
