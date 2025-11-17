import React from 'react';
import { StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native';
import { View, Text, Button } from 'react-native-ui-lib';
import { BrandLogo } from '@/components/common/BrandLogo';
import { Colors, Spacings, Typography } from '@/theme';
import { Controller } from 'react-hook-form';
import Header from '@/components/common/Header';
import DatePicker from '@/components/common/DatePicker';
import QuantityInput from '@/components/common/QuantityInput';
import SelectInput from '@/components/common/SelectInput';
import MultiFileUpload from '@/components/common/MultiFileUpload';
import BottomSlider from '@/components/common/BottomSlider';
import { useDraftEdit } from '@/hooks/useDraftEdit';
import Feather from '@expo/vector-icons/Feather';

export default function EditDraftScreen() {
  const {
    draft,
    isLoadingDraft,
    control,
    errors,
    isSavingDraft,
    isDeletingDraft,
    showDeleteModal,
    handleSave,
    handleDelete,
    confirmDelete,
    closeDeleteModal,
  } = useDraftEdit();

  if (isLoadingDraft || !draft) {
    return (
      <View style={styles.container}>
        <Header title="Modifier la commande" showBackButton />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={styles.loadingText}>Chargement...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Modifier la commande" showBackButton />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: `${process.env.EXPO_PUBLIC_API_URL}/${draft.promoImage}` }}
            style={styles.productImage}
            resizeMode="contain"
          />
          <BrandLogo
            logoUri={`${process.env.EXPO_PUBLIC_API_URL}/${draft.brandLogo}`}
            size={40}
            containerStyle={styles.brandLogoContainer}
          />
        </View>

        {/* Product Info */}
        <View style={styles.infoSection}>
          <Text style={styles.productName}>{draft.promoName}</Text>

          <View style={styles.priceRow}>
            <View>
              <Text style={styles.label}>Prix original</Text>
              <Text style={styles.originalPrice}>{draft.promoPrice}</Text>
            </View>
            <View style={styles.priceRightColumn}>
              <Text style={styles.label}>Prix promo</Text>
              <Text style={styles.discountedPrice}>{draft.discountedPrice.toFixed(2)} Dt</Text>
            </View>
          </View>

          <View style={styles.savingsContainer}>
            <Text style={styles.savingsLabel}>Vous économisez</Text>
            <Text style={styles.savingsAmount}>{draft.savings.toFixed(2)} Dt</Text>
          </View>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          <Text style={styles.sectionTitle}>Informations de commande</Text>

          {/* Date du stock */}
          <Controller
            control={control}
            name="dateStock"
            render={({ field: { onChange, value } }) => (
              <DatePicker
                label="Date du stock"
                value={value}
                onChange={onChange}
                error={errors.dateStock?.message}
                touched={!!errors.dateStock}
                restrictDateRange={true}
              />
            )}
          />

          {/* Quantité */}
          <Controller
            control={control}
            name="quantite"
            render={({ field: { onChange, value } }) => (
              <QuantityInput
                label="Quantité"
                value={value}
                onChange={onChange}
                error={errors.quantite?.message}
                touched={!!errors.quantite}
                min={1}
                max={9999}
              />
            )}
          />

          {/* Conditionnement */}
          <Controller
            control={control}
            name="conditionnement"
            render={({ field: { onChange, value } }) => (
              <SelectInput
                label="Conditionnement (automatique)"
                selectedValue={value}
                onSelect={onChange}
                options={[
                  { label: 'Unité', value: 'Unité' },
                  { label: 'Carton', value: 'Carton' },
                  { label: 'Palette', value: 'Palette' },
                ]}
                error={errors.conditionnement?.message}
                touched={!!errors.conditionnement}
              />
            )}
          />

          {/* Pièces jointes */}
          <Controller
            control={control}
            name="files"
            render={({ field: { onChange, value } }) => (
              <MultiFileUpload
                label="Pièces jointes"
                files={value}
                onChange={onChange}
                error={errors.files?.message}
                touched={!!errors.files}
                maxFiles={5}
              />
            )}
          />
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <Button
          label="Supprimer"
          onPress={handleDelete}
          backgroundColor="transparent"
          style={styles.deleteButton}
          labelStyle={styles.deleteButtonLabel}
          outlineColor={Colors.error}
          outline
          disabled={isSavingDraft || isDeletingDraft}
        />
        <Button
          label="Enregistrer"
          onPress={handleSave}
          backgroundColor={Colors.primary}
          style={styles.saveButton}
          labelStyle={styles.saveButtonLabel}
          disabled={isSavingDraft || isDeletingDraft}
        />
      </View>

      {/* Delete Confirmation Modal */}
      <BottomSlider
        visible={showDeleteModal}
        onClose={closeDeleteModal}
        icon={<Feather name="trash" size={74} color={Colors.error} />}
        title="Êtes-vous sûr de vouloir supprimer cette demande ?"
        subtitle="Cette action est irréversible"
        buttonText=""
        isDelete={true}
        onConfirmDelete={confirmDelete}
        cancelButtonText="Annuler"
        confirmButtonText="Supprimer"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacings.s5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    ...Typography.body1,
    color: Colors.textSecondary,
    marginTop: Spacings.s3,
  },
  imageContainer: {
    width: '100%',
    height: 250,
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacings.s5,
    marginBottom: Spacings.s5,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: Spacings.s3,
  },
  brandLogoContainer: {
    position: 'absolute',
    top: Spacings.s4,
    right: Spacings.s4,
  },
  infoSection: {
    marginBottom: Spacings.s6,
  },
  productName: {
    ...Typography.h3,
    color: Colors.textPrimary,
    marginBottom: Spacings.s4,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacings.s4,
    paddingVertical: Spacings.s4,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.neutral200,
  },
  priceRightColumn: {
    alignItems: 'flex-end',
  },
  label: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginBottom: Spacings.s1,
  },
  originalPrice: {
    ...Typography.h5,
    color: Colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    ...Typography.h4,
    color: Colors.primary,
    fontWeight: '700',
  },
  savingsContainer: {
    backgroundColor: Colors.successLightest,
    padding: Spacings.s4,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  savingsLabel: {
    ...Typography.body1,
    color: Colors.successDark,
    fontWeight: '600',
  },
  savingsAmount: {
    ...Typography.h4,
    color: Colors.success,
    fontWeight: '700',
  },
  formSection: {
    marginBottom: Spacings.s8,
  },
  sectionTitle: {
    ...Typography.h5,
    color: Colors.textPrimary,
    marginBottom: Spacings.s3,
  },
  bottomButtons: {
    flexDirection: 'row',
    gap: Spacings.s3,
    paddingHorizontal: Spacings.s5,
    paddingVertical: Spacings.s4,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral200,
  },
  deleteButton: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.error,
  },
  deleteButtonLabel: {
    ...Typography.button,
    color: Colors.error,
  },
  saveButton: {
    flex: 1,
    height: 56,
    borderRadius: 12,
  },
  saveButtonLabel: {
    ...Typography.button,
    color: Colors.white,
  },
});
