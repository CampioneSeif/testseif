import React from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { View, Text, Button } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Header from '@/components/common/Header';
import { useOrderDetail } from '@/hooks/useOrderDetail';
import Feather from '@expo/vector-icons/Feather';
import {
  CancelOrderBottomSheet,
  OrderProductItem,
  QRScannerBottomSheet,
} from '@/components/orders';
import BottomSlider from '@/components/common/BottomSlider';
import { OrderProduct } from '@/types/order';
import { getClientAvatar } from '@/lib/helpers/OrderHelpers';

export default function OrderDetailScreen() {
  const {
    order,
    isLoading,
    cancelSheetVisible,
    showCancelSheet,
    hideCancelSheet,
    handleAcceptOrder,
    handleCancelOrder,
    qrScannerVisible,
    setQrScannerVisible,
    scanType,
    successSliderVisible,
    handleSuccessSliderClose,
    generateQRCodeUrl,
  } = useOrderDetail();

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

  if (!order) {
    return (
      <View style={styles.container}>
        <Header title="Détails" showBackButton />
        <View style={styles.loadingContainer}>
          <Text>Commande introuvable</Text>
        </View>
      </View>
    );
  }

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'PENDING':
        return { label: 'En attente', color: Colors.warning, backgroundColor: '#FFF4E6' };
      case 'CANCELLED':
        return { label: 'Annulée', color: Colors.error, backgroundColor: '#FFEBEE' };
      case 'DELIVERED':
        return { label: 'Livrée', color: Colors.success, backgroundColor: '#E8F5E9' };
      default:
        return { label: 'En attente', color: Colors.warning, backgroundColor: '#FFF4E6' };
    }
  };

  const statusConfig = getStatusConfig(order.status);

  const renderProductItem = ({ item }: { item: OrderProduct }) => (
    <OrderProductItem product={item} />
  );

  return (
    <View style={styles.container}>
      <Header title="Détails de la commande" showBackButton />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Client Info Header */}
        <View style={styles.clientHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{getClientAvatar(order.clientSex)}</Text>
          </View>
          <View style={styles.clientInfo}>
            <Text style={styles.clientName}>{order.clientName}</Text>
            <Text style={styles.clientPhone}>{order.clientPhone}</Text>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: statusConfig.backgroundColor }]}>
            <View style={[styles.statusDot, { backgroundColor: statusConfig.color }]} />
            <Text style={[styles.statusText, { color: statusConfig.color }]}>{statusConfig.label}</Text>
          </View>
        </View>

        {/* Total Price */}
        <View style={styles.totalPriceSection}>
          <Text style={styles.totalPriceLabel}>Prix Total</Text>
          <Text style={styles.totalPriceValue}>{order.totalPrice} Dt</Text>
        </View>

        {/* Order Details */}
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Détails de la commande</Text>
          <FlatList
            data={order.products}
            renderItem={renderProductItem}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            scrollEnabled={false}
          />
        </View>

        {/* Metadata */}
        <View style={styles.metadataSection}>
          <View style={styles.metadataRow}>
            <Feather name="calendar" size={16} color={Colors.textSecondary} />
            <Text style={styles.metadataText}>
              Créé le{' '}
              {new Date(order.createdAt).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Buttons - Only show for "En attente" status */}
      {order.status === 'PENDING' && (
        <View style={styles.bottomButtons}>
          <Button
            label="Annuler"
            onPress={showCancelSheet}
            backgroundColor="transparent"
            style={styles.cancelButton}
            labelStyle={styles.cancelButtonLabel}
            outlineColor={Colors.error}
            outline
          />
          <Button
            label="Accepter"
            onPress={handleAcceptOrder}
            backgroundColor={Colors.success}
            style={styles.acceptButton}
            labelStyle={styles.acceptButtonLabel}
          />
        </View>
      )}

      {/* Cancel Order Bottom Sheet */}
      <CancelOrderBottomSheet
        visible={cancelSheetVisible}
        onClose={hideCancelSheet}
        onSubmit={handleCancelOrder}
      />

      {/* QR Scanner Bottom Sheet */}
      <QRScannerBottomSheet
        visible={qrScannerVisible}
        onClose={() => setQrScannerVisible(false)}
        qrCodeUrl={generateQRCodeUrl(scanType)}
        title={scanType === 'accept' ? 'Accepter la commande' : 'Annuler la commande'}
        description={
          scanType === 'accept'
            ? 'Présentez ce QR code au client pour confirmer la livraison'
            : "Présentez ce QR code au client pour confirmer l'annulation"
        }
      //  type={scanType}
      />

      {/* Success Slider */}
      <BottomSlider
        visible={successSliderVisible}
        onClose={handleSuccessSliderClose}
        icon={
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor:
                scanType === 'accept' ? Colors.successLightest : Colors.errorLightest,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Feather
              name={scanType === 'accept' ? 'check' : 'x'}
              size={40}
              color={scanType === 'accept' ? Colors.success : Colors.error}
            />
          </View>
        }
        title={
          scanType === 'accept'
            ? 'La commande a été livrée avec succès !'
            : 'La commande est annulée !'
        }
        subtitle={
          scanType === 'accept'
            ? 'Merci pour votre confiance ! À bientôt'
            : 'On espère vous revoir vite !'
        }
        buttonText="Accueil"
        closeOnBackdropPress={false}
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
  clientHeader: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: Spacings.s5,
    marginTop: Spacings.s5,
    marginBottom: Spacings.s4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.backgroundGrey,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacings.s3,
    alignSelf: 'center',
  },
  avatarText: {
    fontSize: 32,
  },
  clientInfo: {
    alignItems: 'center',
    marginBottom: Spacings.s3,
  },
  clientName: {
    ...Typography.h4,
    color: Colors.textPrimary,
    marginBottom: Spacings.s1,
  },
  clientPhone: {
    ...Typography.body2,
    color: Colors.textSecondary,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacings.s4,
    paddingVertical: Spacings.s2,
    borderRadius: 12,
    alignSelf: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: Spacings.s2,
  },
  statusText: {
    ...Typography.body2,
  },
  totalPriceSection: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    padding: Spacings.s5,
    marginBottom: Spacings.s4,
    alignItems: 'center',
  },
  totalPriceLabel: {
    ...Typography.body1,
    color: Colors.white,
    marginBottom: Spacings.s2,
  },
  totalPriceValue: {
    ...Typography.h2,
    color: Colors.white,
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
  cancelButton: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.neutral600,
  },
  cancelButtonLabel: {
    ...Typography.button,
    color: Colors.neutral600,
  },
  acceptButton: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    backgroundColor: Colors.secondary,
  },
  acceptButtonLabel: {
    ...Typography.button,
    color: Colors.white,
  },
});
