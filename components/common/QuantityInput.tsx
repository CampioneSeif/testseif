import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';

interface QuantityInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  error?: string;
  touched?: boolean;
  min?: number;
  max?: number;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  label,
  value,
  onChange,
  error,
  touched,
  min = 1,
  max = 9999,
}) => {
  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleTextChange = (text: string) => {
    const numValue = parseInt(text, 10);
    if (!isNaN(numValue) && numValue >= min && numValue <= max) {
      onChange(numValue);
    } else if (text === '') {
      onChange(min);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, error && touched && styles.inputError]}>
        <TouchableOpacity
          style={[styles.button, styles.moins]}
          onPress={handleDecrement}
          disabled={value <= min}
        >
          <Feather
            name="minus"
            size={20}
            color={value <= min ? Colors.textDisabled : Colors.textPrimary}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          value={String(value)}
          onChangeText={handleTextChange}
          keyboardType="number-pad"
          textAlign="center"
        />

        <TouchableOpacity
          style={[styles.button, styles.plus]}
          onPress={handleIncrement}
          disabled={value >= max}
        >
          <Feather
            name="plus"
            size={20}
            color={value >= max ? Colors.textDisabled : Colors.textPrimary}
          />
        </TouchableOpacity>
      </View>
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacings.s4,
  },
  label: {
    ...Typography.body2,
    marginBottom: Spacings.s2,
    color: Colors.textPrimary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderWidth: 1,
    borderColor: Colors.neutral200,
    backgroundColor: Colors.background,
    borderRadius:10,
  },
  inputError: {
    borderColor: Colors.error,
  },
  plus: {
    backgroundColor: Colors.secondary,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 0,
  },
  moins: {
    backgroundColor: Colors.neutral300,
     borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 10,
  },
  button: {
    width: 56,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    ...Typography.h5,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  errorText: {
    ...Typography.caption,
    color: Colors.error,
    marginTop: Spacings.s2,
  },
});

export default QuantityInput;
