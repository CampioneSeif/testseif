import React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { View, Text, Button } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Header from '@/components/common/Header';
import { formatFullDate } from '@/lib/helpers/dateHelpers';
import Feather from '@expo/vector-icons/Feather';
import Toaster from '@/components/common/Toaster';
import { useDraftDetail } from '@/hooks/useDraftDetail';
import { BrandLogo } from '@/components/common/BrandLogo';

export default function DraftDetailScreen() {
  const {
    draft,
    isLoading,
    isSubmittingSubscription,
    isDraftReady,
    successMessage,
    errorMessage,
    handleModify,
    handleConfirm,
    clearSuccessMessage,
    clearErrorMessage,
  } = useDraftDetail();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Header title="Détails" showBackButton />
        <View style={styles.loadingContainer}>
          <Text>Chargement...</Text>
        </View>
      </View>
    );
  }

  if (!draft) {
    return (
      <View style={styles.container}>
        <Header title="Détails" showBackButton />
        <View style={styles.loadingContainer}>
          <Text>Brouillon introuvable</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Détails de la commande" showBackButton />

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
          <View style={styles.statusBadge}>
            <View
              style={[
                styles.statusDot,
                {
                  backgroundColor:
                    draft.status === 'draft'
                      ? Colors.warning
                      : draft.status === 'pending'
                        ? Colors.secondary
                        : draft.status === 'approved'
                          ? Colors.success
                          : draft.status === 'rejected'
                            ? Colors.error
                            : draft.status === 'expired'
                              ? Colors.grey
                              : Colors.success,
                },
              ]}
            />
            <Text style={styles.statusBadgeText}>
              {draft.status === 'draft'
                ? 'Brouillon'
                : draft.status === 'pending'
                  ? 'En attente'
                  : draft.status === 'approved'
                    ? 'Accepté'
                    : draft.status === 'rejected'
                      ? 'Refusé'
                      : draft.status === 'expired'
                        ? 'Expiré'
                        : draft.status}
            </Text>
          </View>
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

        {/* Order Details */}
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Détails de la commande</Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date du stock</Text>
            <Text style={styles.detailValue}>{draft.formData.dateStock || 'Non défini'}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Quantité</Text>
            <Text style={styles.detailValue}>{draft.formData.quantite || 0}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Conditionnement</Text>
            <Text style={styles.detailValue}>{draft.formData.conditionnement || 'Non défini'}</Text>
          </View>

          {draft.formData.files && draft.formData.files.length > 0 && (
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Pièces jointes</Text>
              <Text style={styles.detailValue}>{draft.formData.files.length} fichier(s)</Text>
            </View>
          )}
        </View>

        {/* Metadata */}
        <View style={styles.metadataSection}>
          <View style={styles.metadataRow}>
            <Feather name="calendar" size={16} color={Colors.textSecondary} />
            <Text style={styles.metadataText}>Créé le {formatFullDate(draft.createdAt)}</Text>
          </View>
          <View style={styles.metadataRow}>
            <Feather name="clock" size={16} color={Colors.textSecondary} />
            <Text style={styles.metadataText}>Modifié le {formatFullDate(draft.updatedAt)}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      {draft.status === 'draft' && (
        <View style={styles.bottomButtons}>
          <Button
            label="Modifier"
            onPress={handleModify}
            backgroundColor="transparent"
            style={styles.modifyButton}
            labelStyle={styles.modifyButtonLabel}
            outlineColor={Colors.neutral600}
            outline
            disabled={isSubmittingSubscription}
          />
          <Button
            label="Confirmer"
            onPress={handleConfirm}
            backgroundColor={Colors.primary}
            style={styles.confirmButton}
            labelStyle={styles.confirmButtonLabel}
            disabled={!isDraftReady || isSubmittingSubscription}
          />
        </View>
      )}

      {/* Success Toaster - Positioned on top */}
      {successMessage && (
        <View style={styles.toasterContainer}>
          <Toaster message={successMessage} onClose={clearSuccessMessage} type="success" />
        </View>
      )}

      {/* Error Toaster - Positioned on top */}
      {errorMessage && (
        <View style={styles.toasterContainer}>
          <Toaster message={errorMessage} onClose={clearErrorMessage} type="error" />
        </View>
      )}
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
    height: '100%',
    resizeMode: 'contain',
  },
  brandLogoContainer: {
    position: 'absolute',
    top: Spacings.s4,
    right: Spacings.s4,
  },
  statusBadge: {
    position: 'absolute',
    top: Spacings.s4,
    left: Spacings.s4,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacings.s3,
    paddingVertical: Spacings.s2,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: Spacings.s2,
  },
  statusBadgeText: {
    ...Typography.caption,
    color: Colors.textPrimary,
    fontWeight: '600',
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
  detailsSection: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: Spacings.s5,
    marginBottom: Spacings.s5,
  },
  sectionTitle: {
    ...Typography.h5,
    color: Colors.textPrimary,
    marginBottom: Spacings.s4,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacings.s3,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral200,
  },
  detailLabel: {
    ...Typography.body2,
    color: Colors.textSecondary,
  },
  detailValue: {
    ...Typography.body1,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  metadataSection: {
    marginBottom: Spacings.s8,
  },
  metadataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacings.s3,
  },
  metadataText: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginLeft: Spacings.s2,
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
  modifyButton: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.neutral600,
  },
  modifyButtonLabel: {
    ...Typography.button,
    color: Colors.neutral600,
  },
  confirmButton: {
    flex: 1,
    height: 56,
    borderRadius: 12,
  },
  confirmButtonLabel: {
    ...Typography.button,
    color: Colors.white,
  },
  toasterContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    zIndex: 9999,
    paddingHorizontal: Spacings.s5,
  },
});
