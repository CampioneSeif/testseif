import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';

interface OrderFilterBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  selectedStatus?: string;
  onStatusChange: (status: string | undefined) => void;
}

const ORDER_STATUS_OPTIONS = [
  { label: 'Tous les statuts', value: undefined },
  { label: 'En attente', value: 'PENDING' },
  { label: 'Livrée', value: 'DELIVERED' },
  { label: 'Annulée', value: 'CANCELLED' },
];

export default function OrderFilterBottomSheet({
  visible,
  onClose,
  selectedStatus,
  onStatusChange,
}: OrderFilterBottomSheetProps) {
  const [tempStatus, setTempStatus] = useState<string | undefined>(selectedStatus);

  const handleApply = () => {
    onStatusChange(tempStatus);
    onClose();
  };

  const handleReset = () => {
    setTempStatus(undefined);
    onStatusChange(undefined);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={onClose} />
        
        <View style={styles.bottomSheet}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Filtrer les commandes</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Feather name="x" size={24} color={Colors.textPrimary} />
            </TouchableOpacity>
          </View>

          {/* Status Options */}
          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Statut de la commande</Text>
            {ORDER_STATUS_OPTIONS.map((option) => (
              <TouchableOpacity
                key={option.value || 'all'}
                style={[
                  styles.optionItem,
                  tempStatus === option.value && styles.selectedOption,
                ]}
                onPress={() => setTempStatus(option.value)}
              >
                <Text
                  style={[
                    styles.optionText,
                    tempStatus === option.value && styles.selectedOptionText,
                  ]}
                >
                  {option.label}
                </Text>
                {tempStatus === option.value && (
                  <Feather name="check" size={20} color={Colors.primary} />
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* Actions */}
          <View style={styles.actions}>
            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
              <Text style={styles.resetButtonText}>Réinitialiser</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
              <Text style={styles.applyButtonText}>Appliquer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
  },
  bottomSheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: Spacings.s6,
    maxHeight: '70%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacings.s4,
    paddingVertical: Spacings.s4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral200,
  },
  title: {
    ...Typography.h3,
    color: Colors.textPrimary,
  },
  closeButton: {
    padding: Spacings.s1,
  },
  content: {
    paddingHorizontal: Spacings.s4,
    paddingVertical: Spacings.s3,
  },
  sectionTitle: {
    ...Typography.body1,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacings.s3,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacings.s3,
    paddingHorizontal: Spacings.s3,
    borderRadius: 8,
    marginBottom: Spacings.s2,
  },
  selectedOption: {
    backgroundColor: Colors.secondary,
  },
  optionText: {
    ...Typography.body2,
    color: Colors.textPrimary,
  },
  selectedOptionText: {
    color: Colors.white,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    paddingHorizontal: Spacings.s4,
    paddingTop: Spacings.s4,
    gap: Spacings.s3,
  },
  resetButton: {
    flex: 1,
    paddingVertical: Spacings.s3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.neutral300,
    alignItems: 'center',
  },
  resetButtonText: {
    ...Typography.button,
    color: Colors.textSecondary,
  },
  applyButton: {
    flex: 1,
    paddingVertical: Spacings.s3,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  applyButtonText: {
    ...Typography.button,
    color: Colors.white,
  },
});
