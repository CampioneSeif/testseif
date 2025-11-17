import React from 'react';
import { StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { View, Text, Button } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SelectInput from '@/components/common/SelectInput';
import TextField from '../common/TextField';

interface CancelOrderBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (reason: string, comment: string) => void;
}

const CANCEL_REASONS = [
  { label: 'Produit non disponible', value: 'product_unavailable' },
  { label: 'Client a annulé', value: 'client_cancelled' },
  { label: 'Problème de livraison', value: 'delivery_issue' },
  { label: 'Prix incorrect', value: 'incorrect_price' },
  { label: 'Autre', value: 'other' },
];

const cancelOrderSchema = yup.object().shape({
  reason: yup.string().required('La raison est obligatoire'),
  comment: yup.string().default(''),
});

type CancelOrderFormData = yup.InferType<typeof cancelOrderSchema>;

export default function CancelOrderBottomSheet({
  visible,
  onClose,
  onSubmit,
}: CancelOrderBottomSheetProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CancelOrderFormData>({
    resolver: yupResolver(cancelOrderSchema),
    mode: 'onChange',
    defaultValues: {
      reason: '',
      comment: '',
    },
  });

  const onSubmitForm = (data: CancelOrderFormData) => {
    const selectedReasonLabel = CANCEL_REASONS.find(r => r.value === data.reason)?.label || data.reason;
    onSubmit(selectedReasonLabel, data.comment || '');
    reset();
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.bottomSheet}
          onPress={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Text style={styles.title}>Annuler la commande ?</Text>
              <Text style={styles.description}>
                Veuillez nous indiquer pourquoi vous souhaitez annuler cette commande
              </Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Feather name="x" size={24} color={Colors.textPrimary} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Reason Selection */}
            <Controller
              control={control}
              name="reason"
              render={({ field: { onChange, value } }) => (
                <SelectInput
                  label="Raison de l'annulation *"
                  options={CANCEL_REASONS}
                  selectedValue={value}
                  onSelect={onChange}
                  error={errors.reason?.message}
                  touched={!!errors.reason}
                  placeholder="Sélectionner une raison"
                />
              )}
            />

            {/* Comment Input */}
            <Controller
              control={control}
              name="comment"
              render={({ field: { onChange, value } }) => (
                <View style={styles.commentContainer}>
                  <TextField
                    label="Commentaire (optionnel)"
                    value={value}
                    onChangeText={onChange}
                    placeholder="Ajoutez un commentaire..."
                    multiline
                    numberOfLines={4}
                    placeholderTextColor={Colors.textSecondary}
                  />
                </View>
              )}
            />
          </ScrollView>

          {/* Bottom Buttons */}
          <View style={styles.bottomButtons}>
            <Button
              label="Annuler"
              onPress={handleCancel}
              backgroundColor="transparent"
              style={styles.cancelButton}
              labelStyle={styles.cancelButtonLabel}
              outlineColor={Colors.neutral600}
              outline
            />
            <Button
              label="Envoyer"
              onPress={handleSubmit(onSubmitForm)}
              backgroundColor={Colors.secondary}
              style={styles.submitButton}
              labelStyle={styles.submitButtonLabel}
              disabled={!isValid}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '80%',
    paddingBottom: Spacings.s5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: Spacings.s5,
    paddingTop: Spacings.s5,
    paddingBottom: Spacings.s4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral200,
  },
  headerContent: {
    flex: 1,
    marginRight: Spacings.s3,
  },
  title: {
    ...Typography.h4,
    color: Colors.primary,
    marginBottom: Spacings.s2,
  },
  description: {
    ...Typography.body2,
    color: Colors.textSecondary,
  },
  closeButton: {
    padding: Spacings.s2,
  },
  content: {
    paddingHorizontal: Spacings.s5,
    paddingTop: Spacings.s5,
  },
  commentContainer: {
    marginBottom: Spacings.s5,
  },
  bottomButtons: {
    flexDirection: 'row',
    gap: Spacings.s3,
    paddingHorizontal: Spacings.s5,
    paddingTop: Spacings.s4,
  },
  cancelButton: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
  },
  cancelButtonLabel: {
    ...Typography.button,
    color: Colors.neutral600,
  },
  submitButton: {
    flex: 1,
    height: 56,
    borderRadius: 12,
  },
  submitButtonLabel: {
    ...Typography.button,
    color: Colors.white,
  },
});
