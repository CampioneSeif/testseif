import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, ActivityIndicator } from 'react-native';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';

interface SelectInputProps {
  label: string;
  options: { label: string; value: string }[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  error?: string;
  touched?: boolean;
  isLoading?: boolean;
  placeholder?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  selectedValue,
  onSelect,
  error,
  touched,
  isLoading,
  placeholder = 'Sélectionner',
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setModalVisible(false);
  };

  const getSelectedLabel = () => {
    return options.find((opt) => opt.value === selectedValue)?.label;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[styles.input, error && touched && styles.inputError]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={[styles.text, !selectedValue && styles.placeholder]}>
          {selectedValue ? getSelectedLabel() : placeholder}
        </Text>
        <Feather name="chevron-down" size={20} color={Colors.textSecondary} />
      </TouchableOpacity>

      {error && touched && <Text style={styles.errorText}>{error}</Text>}

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{label}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Feather name="x" size={24} color={Colors.textPrimary} />
              </TouchableOpacity>
            </View>
            {isLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color={Colors.secondary} />
                <Text style={styles.loadingText}>Chargement...</Text>
              </View>
            ) : (
              <FlatList
                data={options}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.optionItem}
                    onPress={() => handleSelect(item.value)}
                  >
                    <Text style={styles.optionText}>{item.label}</Text>
                    {selectedValue === item.value && (
                      <Feather name="check" size={20} color={Colors.secondary} />
                    )}
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  loadingText: {
    marginLeft: 8,
    color: Colors.textSecondary,
    fontSize: 14,
  },
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
  },
  placeholder: {
    color: Colors.textSecondary,
  },
  errorText: {
    ...Typography.caption,
    color: Colors.error,
    marginTop: Spacings.s2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
    paddingBottom: Spacings.s5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacings.s5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral300,
  },
  modalTitle: {
    ...Typography.h3,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacings.s4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral200,
  },
  optionText: {
    ...Typography.body1,
  },
});

export default SelectInput;
