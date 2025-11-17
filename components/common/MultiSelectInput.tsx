import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, ActivityIndicator } from 'react-native';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';

interface MultiSelectInputProps {
  label: string;
  options: { label: string; value: string }[];
  selectedValues: string[];
  onSelect: (values: string[]) => void;
  error?: string;
  touched?: boolean;
  isLoading?: boolean;
}

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
  label,
  options,
  selectedValues,
  onSelect,
  error,
  touched,
  isLoading,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleOption = (value: string) => {
    if (selectedValues.includes(value)) {
      onSelect(selectedValues.filter((v) => v !== value));
    } else {
      onSelect([...selectedValues, value]);
    }
  };

  const getSelectedLabels = () => {
    return options.filter((opt) => selectedValues.includes(opt.value)).map((opt) => opt.label);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[styles.input, error && touched && styles.inputError]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={[styles.text, selectedValues.length === 0 && styles.placeholder]}>
          {selectedValues.length > 0 ? `${selectedValues.length} sélectionné(s)` : 'Sélectionner'}
        </Text>
        <Feather name="chevron-down" size={20} color={Colors.textSecondary} />
      </TouchableOpacity>

      {selectedValues.length > 0 && (
        <View style={styles.tagsContainer}>
          {getSelectedLabels().map((label, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{label}</Text>
              <TouchableOpacity
                onPress={() => {
                  const valueToRemove = options.find((opt) => opt.label === label)?.value;
                  if (valueToRemove) toggleOption(valueToRemove);
                }}
              >
                <Feather name="x-circle" size={14} color={Colors.secondaryDark} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

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
                    onPress={() => toggleOption(item.value)}
                  >
                    <Text style={styles.optionText}>{item.label}</Text>
                    {selectedValues.includes(item.value) && (
                      <Feather name="check" size={20} color={Colors.secondary} />
                    )}
                  </TouchableOpacity>
                )}
              />
            )}

            <TouchableOpacity style={styles.doneButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.doneButtonText}>Terminé</Text>
            </TouchableOpacity>
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
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: Spacings.s2,
    gap: Spacings.s2,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    paddingHorizontal: Spacings.s3,
    paddingVertical: Spacings.s2,
    borderRadius: 10,
    gap: Spacings.s2,
  },
  tagText: {
    ...Typography.caption,
    color: Colors.white,
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
  doneButton: {
    backgroundColor: Colors.secondary,
    margin: Spacings.s5,
    padding: Spacings.s4,
    borderRadius: 10,
    alignItems: 'center',
  },
  doneButtonText: {
    ...Typography.button,
    color: Colors.textPrimary,
  },
});

export default MultiSelectInput;
