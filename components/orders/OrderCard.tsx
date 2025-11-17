import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import { Order } from '@/types/order';
import { formatRelativeDate } from '@/lib/helpers/dateHelpers';

interface OrderCardProps {
  order: Order;
  onPress: (orderId: string) => void;
}

const getStatusConfig = (status: Order['status']) => {
  switch (status) {
    case 'En attente':
      return {
        color: Colors.warning,
        backgroundColor: '#FFF4E6',
      };
    case 'Annulée':
      return {
        color: Colors.error,
        backgroundColor: '#FFEBEE',
      };
    case 'Livrée':
      return {
        color: Colors.success,
        backgroundColor: '#E8F5E9',
      };
    default:
      return {
        color: Colors.warning,
        backgroundColor: '#FFF4E6',
      };
  }
};

export const OrderCard: React.FC<OrderCardProps> = ({ order, onPress }) => {
  const statusConfig = getStatusConfig(order.status);

  return (
    <TouchableOpacity
      style={styles.orderCard}
      onPress={() => onPress(order.id)}
      activeOpacity={0.7}
    >
      <View style={styles.orderHeader}>
        <View style={styles.clientInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{order.clientAvatar}</Text>
          </View>
          <View style={styles.clientDetails}>
            <Text style={styles.clientName} numberOfLines={1}>
              {order.clientName}
            </Text>
            <Text style={styles.clientPhone}>{order.clientPhone}</Text>
          </View>
        </View>
      </View>

      <View style={styles.orderBody}>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Total</Text>
          <Text style={styles.priceValue}>{order.totalPrice} Dt</Text>
        </View>
        <Text style={styles.productsCount}>
          {order.products.length} produit{order.products.length > 1 ? 's' : ''}
        </Text>
      </View>

      <View style={styles.orderFooter}>
        <View style={[styles.statusBadge, { backgroundColor: statusConfig.backgroundColor }]}>
          <View style={[styles.statusDot, { backgroundColor: statusConfig.color }]} />
          <Text style={[styles.statusText, { color: statusConfig.color }]}>
            {order.status}
          </Text>
        </View>
        <Text style={styles.dateText}>{formatRelativeDate(order.updatedAt)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  orderCard: {
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
  orderHeader: {
    marginBottom: Spacings.s3,
  },
  clientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.backgroundGrey,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacings.s3,
  },
  avatarText: {
    fontSize: 24,
  },
  clientDetails: {
    flex: 1,
  },
  clientName: {
    ...Typography.h6,
    color: Colors.textPrimary,
    marginBottom: Spacings.s1,
  },
  clientPhone: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  orderBody: {
    paddingVertical: Spacings.s3,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.neutral200,
    marginBottom: Spacings.s3,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacings.s1,
  },
  priceLabel: {
    ...Typography.body2,
    color: Colors.textSecondary,
  },
  priceValue: {
    ...Typography.h5,
    color: Colors.primary,
    fontWeight: '700',
  },
  productsCount: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacings.s3,
    paddingVertical: Spacings.s2,
    borderRadius: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: Spacings.s2,
  },
  statusText: {
    ...Typography.caption,
    fontWeight: '600',
  },
  dateText: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
});
