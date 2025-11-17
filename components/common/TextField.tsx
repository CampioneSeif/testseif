import React from 'react';
import { StyleSheet, TextInputProps } from 'react-native';
import { View, Text, TextField as UITextField } from 'react-native-ui-lib';
import { Colors, Spacings } from '@/theme';

interface TextFieldProps extends TextInputProps {
  label: string;
  error?: string;
  touched?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
}

const TextField: React.FC<TextFieldProps> = ({ 
  label, 
  error, 
  touched, 
  multiline = false,
  numberOfLines = 1,
  ...props 
}) => {
  return (
    <View marginB-s4>
      <Text body2 marginB-s2 color={Colors.textPrimary}>{label}</Text>
      <UITextField
        {...props}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholderTextColor={Colors.textSecondary}
        containerStyle={styles.container}
        fieldStyle={[
          styles.input,
          multiline && styles.inputMultiline,
          error && touched && styles.inputError
        ]}
        enableErrors={!!(error && touched)}
        validationMessage={error && touched ? error : undefined}
        validationMessageStyle={styles.errorText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  input: {
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderColor: Colors.neutral300,
    borderRadius: 10,
    paddingHorizontal: Spacings.s4,
    backgroundColor: Colors.background,
  },
  inputMultiline: {
    height: 'auto',
    minHeight: 100,
    paddingVertical: Spacings.s4,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: Colors.error,
  },
  errorText: {
    fontSize: 12,
    lineHeight: 16,
    color: Colors.error,
    marginTop: Spacings.s1,
  },
});

export default TextField;
