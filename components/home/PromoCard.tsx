import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  GestureResponderEvent,
} from 'react-native';
import { BrandLogo } from '@/components/common/BrandLogo';
import { Colors, Spacings, Typography } from '@/theme';
import { Promo } from '@/types/promotion';

interface PromoCardProps {
  item: Promo;
  onPress?: (promo: Promo) => void;
}

export default function PromoCard({ item, onPress }: PromoCardProps) {
  const handleAddPress = (e: GestureResponderEvent) => {
    e.stopPropagation();
    onPress?.(item);
  };
  return (
    <TouchableOpacity style={styles.promoCard} activeOpacity={0.7}>
      <View style={styles.promoImageContainer}>
        <Image
          source={{ uri: `${process.env.EXPO_PUBLIC_API_URL}/${item.image}` }}
          style={styles.promoImage}
          resizeMode="contain"
        />
        {item.brandLogo && (
          <BrandLogo
            logoUri={`${process.env.EXPO_PUBLIC_API_URL}/${item.brandLogo}`}
            size={32}
            containerStyle={styles.brandLogoContainer}
          />
        )}
      </View>
      <View style={styles.promoInfo}>
        <Text style={styles.promoName} numberOfLines={2}>
          {item.name}
        </Text>
        <View style={styles.priceRow}>
          <View style={styles.priceContainer}>
            <Text style={styles.promoPrice}>{item.discountedPrice}</Text>
            {item.basePrice && (
              <Text style={styles.promoPriceOld}>{item.basePrice.toFixed(2)} Dt</Text>
            )}
          </View>
          <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  promoCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  promoImageContainer: {
    width: '100%',
    height: 140,
    backgroundColor: Colors.backgroundGrey,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  promoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  discountBadge: {
    position: 'absolute',
    top: Spacings.s2,
    right: Spacings.s2,
    // backgroundColor: Colors.primary,
    paddingHorizontal: Spacings.s2,
    paddingVertical: Spacings.s1,
    borderRadius: 8,
  },
  discountText: {
    color: Colors.white,
    ...Typography.caption,
    fontWeight: '700',
  },
  promoInfo: {
    padding: Spacings.s3,
  },
  promoName: {
    ...Typography.body2,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacings.s1,
    minHeight: 36,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: Spacings.s1,
  },
  promoPrice: {
    ...Typography.subtitle1,
    fontWeight: '700',
    color: Colors.primary,
    backgroundColor: Colors.secondary,
    padding: Spacings.s2,
    borderRadius: Spacings.s2,
  },
  promoPriceOld: {
    ...Typography.caption,
    color: Colors.textDisabled,
    textDecorationLine: 'line-through',
    bottom: Spacings.s1,
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: Spacings.s2,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.white,
    lineHeight: 20,
  },
  brandLogoContainer: {
    position: 'absolute',
    top: Spacings.s2,
    right: Spacings.s2,
  },
});
