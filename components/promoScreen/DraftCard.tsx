import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import { PromoDraft } from '@/types/draft';
import { formatRelativeDate } from '@/lib/helpers/dateHelpers';

interface DraftCardProps {
  draft: PromoDraft;
  onPress: (draftId: string) => void;
}

const getStatusConfig = (status: PromoDraft['status']) => {
  switch (status) {
    case 'draft':
      return {
        label: 'Brouillon',
        color: Colors.warning,
        // Icon: Draft,
      };
    case 'pending':
      return {
        label: 'En attente',
        color: Colors.secondary,
        //    Icon: EnAttente,
      };
    case 'approved':
      return {
        label: 'Accepté',
        color: Colors.success,
        //  Icon: Accepter,
      };
    case 'rejected':
      return {
        label: 'Refusé',
        color: Colors.error,
        //    Icon: Refuser,
      };
    case 'expired':
      return {
        label: 'Expiré',
        color: '#747474',
        // Icon: Expired,
      };
    default:
      return {
        label: 'Brouillon',
        color: Colors.warning,
        //   Icon: Draft,
      };
  }
};

export const DraftCard: React.FC<DraftCardProps> = ({ draft, onPress }) => {
  const statusConfig = getStatusConfig(draft.status);

  return (
    <TouchableOpacity
      style={styles.draftCard}
      onPress={() => onPress(draft.id)}
      activeOpacity={0.7}
    >
      <View style={styles.draftHeader}>
        <View style={styles.productInfo}>
          <Image
            source={{ uri: `${process.env.EXPO_PUBLIC_API_URL}/${draft.promoImage}` }}
            style={styles.productImage}
            resizeMode="contain"
          />
          <View style={styles.productDetails}>
            <Text style={styles.productName} numberOfLines={1}>
              {draft.promoName}
            </Text>
            <Text style={styles.productPrice}>
              {draft.discountedPrice.toFixed(2)} Dt
              <Text style={styles.originalPrice}> {draft.promoPrice}</Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.draftFooter}>
        <View style={styles.statusContainer}>
          <View style={[styles.statusDot, { backgroundColor: statusConfig.color }]} />
          <Text style={styles.statusText}>{statusConfig.label}</Text>
        </View>
        <Text style={styles.dateText}>{formatRelativeDate(draft.updatedAt)}</Text>
      </View>

      {draft.formData && draft.formData?.quantite && (
        <View style={styles.quantityBadge}>
          <Text style={styles.quantityText}>Qté: {draft.formData.quantite}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  draftCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: Spacings.s4,
    marginBottom: Spacings.s4,
    borderWidth: 1,
    borderColor: Colors.neutral200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  draftHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacings.s3,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: Spacings.s3,
    backgroundColor: Colors.backgroundGrey,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    ...Typography.h6,
    color: Colors.textPrimary,
    marginBottom: Spacings.s1,
  },
  productPrice: {
    ...Typography.body1,
    color: Colors.primary,
    fontWeight: '700',
  },
  originalPrice: {
    ...Typography.caption,
    color: Colors.textSecondary,
    textDecorationLine: 'line-through',
    fontWeight: '400',
  },

  draftFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Spacings.s3,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral200,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: Spacings.s2,
  },
  statusText: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  dateText: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  quantityBadge: {
    position: 'absolute',
    top: Spacings.s2,
    right: Spacings.s2,
    backgroundColor: Colors.backgroundGrey,
    paddingHorizontal: Spacings.s2,
    paddingVertical: Spacings.s1,
    borderRadius: 6,
  },
  quantityText: {
    ...Typography.caption,
    color: Colors.textSecondary,
    fontSize: 10,
  },
});
