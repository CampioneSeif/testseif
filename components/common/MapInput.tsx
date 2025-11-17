import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';

interface MapInputProps {
  label: string;
  value?: string;
  onPress: () => void;
  error?: string;
  touched?: boolean;
}

const MapInput: React.FC<MapInputProps> = ({ label, value, onPress, error, touched }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={[styles.input, error && touched && styles.inputError]} onPress={onPress}>
        <Text style={[styles.text, !value && styles.placeholder]}>
          {value || 'Sélectionner une adresse'}
        </Text>
        <Feather name="map-pin" size={20} color={Colors.textSecondary} />
      </TouchableOpacity>
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
  input: {
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderColor: Colors.neutral300,
    borderRadius: 10,
    paddingHorizontal: Spacings.s4,
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputError: {
    borderColor: Colors.error,
  },
  text: {
    ...Typography.body1,
    color: Colors.textPrimary,
    flex: 1,
  },
  placeholder: {
    color: Colors.textSecondary,
  },
  errorText: {
    ...Typography.caption,
    color: Colors.error,
    marginTop: Spacings.s2,
  },
});

export default MapInput;
