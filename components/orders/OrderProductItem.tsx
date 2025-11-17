import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import { OrderProduct } from '@/types/order';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';

interface OrderProductItemProps {
  product: OrderProduct;
}

export const OrderProductItem: React.FC<OrderProductItemProps> = ({ product }) => {
  return (
    <View style={styles.productRow}>
      <View style={styles.productInfo}>
        <Image
          source={{ uri: `${API_URL}/${product.image}` }}
          style={styles.productImage}
          onError={() => console.log('Failed to load product image')}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price} Dt</Text>
        </View>
      </View>
      <View style={styles.quantityBadge}>
        <Text style={styles.quantityText}>x{product.quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacings.s3,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral200,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  productImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: Spacings.s3,
    backgroundColor: Colors.neutral100,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    ...Typography.body1,
    color: Colors.textPrimary,
    marginBottom: Spacings.s1,
  },
  productPrice: {
    ...Typography.body2,
    color: Colors.primary,
  },
  quantityBadge: {
    backgroundColor: Colors.backgroundGrey,
    paddingHorizontal: Spacings.s3,
    paddingVertical: Spacings.s2,
    borderRadius: 8,
  },
  quantityText: {
    ...Typography.caption,
    color: Colors.textPrimary,
  },
});
