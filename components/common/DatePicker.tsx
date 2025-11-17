import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface DatePickerProps {
  label: string;
  value?: string;
  onChange: (date: string) => void;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  restrictDateRange?: boolean; // If true, restricts dates to last 1 month and disables future dates
}

const DatePicker: React.FC<DatePickerProps> = ({ 
  label, 
  value, 
  onChange, 
  error, 
  touched,
  placeholder = 'JJ/MM/AAAA',
  restrictDateRange = false
}) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  // Calculate date range if restriction is enabled
  const getMinimumDate = () => {
    if (!restrictDateRange) return undefined;
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    return oneMonthAgo;
  };

  const getMaximumDate = () => {
    if (!restrictDateRange) return undefined;
    return new Date(); // Today
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const parts = dateString.split('/');
    if (parts.length === 3) {
      return dateString;
    }
    return '';
  };

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
      const day = String(selectedDate.getDate()).padStart(2, '0');
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const year = selectedDate.getFullYear();
      onChange(`${day}/${month}/${year}`);
    }
  };

  const parseDate = (dateString: string): Date => {
    if (!dateString) return new Date();
    const parts = dateString.split('/');
    if (parts.length === 3) {
      return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    }
    return new Date();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity 
        style={[styles.input, error && touched && styles.inputError]} 
        onPress={() => setShow(true)}
      >
        <Text style={[styles.text, !value && styles.placeholder]}>
          {formatDate(value || '') || placeholder}
        </Text>
      <Feather name="calendar" size={20} color={Colors.textSecondary} style={styles.icon} />
      </TouchableOpacity>
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
      
      {show && (
        <DateTimePicker
          value={value ? parseDate(value) : date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
          minimumDate={getMinimumDate()}
          maximumDate={getMaximumDate()}
        />
      )}
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
  },
  inputError: {
    borderColor: Colors.error,
  },
  icon: {
    marginRight: Spacings.s3,
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

export default DatePicker;
