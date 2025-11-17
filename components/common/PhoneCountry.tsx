import React, { useState } from 'react';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { View, Text, TextField} from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import TnSvg from '@/assets/svgs/flag/TnSvg';

interface PhoneCountryProps {
  value: string;
  onChange: (val: string) => void;
  height?: number;
  enableErrors?: boolean;
}

const TUNISIA = {
  code: 'TN',
  name: 'Tunisie',
  calling_code: '+216',
  pattern: '^[0-9]{8}$',
  max_length: 8,
  example: '20123456',
};

const PhoneCountry: React.FC<PhoneCountryProps> = ({
  value,
  onChange,
  height = 53,
  enableErrors = true,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (text: string) => {
    const digits = text.replace(/[^0-9]/g, '');
    onChange(digits);

    if (enableErrors) {
      if (!digits.trim()) setError('Numéro requis');
      else if (digits.length < TUNISIA.max_length) setError('Numéro incomplet');
      else setError(null);
    }
  };

  return (
    <View style={{ width: '100%' }}>
      <View
        style={[
          styles.container,
          {
            borderColor: error
              ? Colors.primary
              : Colors.neutral300,
          },
          { height },
        ]}
      >
        <View style={styles.selector}>
          <TnSvg width={28} height={20} />
          <Text body2 color={Colors.textPrimary}>{TUNISIA.calling_code}</Text>
        </View>

        <View style={styles.inputWrap}>
          <TextField
            placeholder="Numéro de téléphone"
            placeholderTextColor={Colors.textSecondary}
            keyboardType="numeric"
            maxLength={TUNISIA.max_length}
            value={value}
            onChangeText={handleChange}
            containerStyle={styles.textFieldContainer}
            fieldStyle={[styles.input, error && styles.inputError]}
            hideUnderline
            enableErrors={false}
          />
        </View>
      </View>

      {error && enableErrors && (
        <View marginT-s1 paddingL-s3>
          <Text caption color={Colors.error}>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    //backgroundColor: Colors.white,
    borderWidth: 1,
    overflow: 'hidden',
  } as ViewStyle,
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacings.s3,
    gap: Spacings.s2,
  } as ViewStyle,
  inputWrap: {
    flex: 1,
    paddingRight: Spacings.s2,
  } as ViewStyle,
  textFieldContainer: {
    marginBottom: 0,
    height: '100%',
  } as ViewStyle,
  input: {
    ...Typography.body1,
    fontFamily: 'Inter-Regular',
    height: '100%',
    borderLeftWidth: 1,
    borderLeftColor: Colors.neutral200,
    paddingHorizontal: Spacings.s3,
    color: Colors.textPrimary,
    borderWidth: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
  } as TextStyle,
  inputError: {
    borderLeftColor: Colors.error,
  } as TextStyle,
});

export default PhoneCountry;
