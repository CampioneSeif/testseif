import React, { useState } from 'react';
import { StyleSheet, Modal, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';


interface QRScannerBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  qrCodeUrl: string;
  title: string;
  description: string;
 // type: 'accept' | 'cancel';
}

export default function QRScannerBottomSheet({
  visible,
  onClose,
  qrCodeUrl,
  title,
  description,
 // type,
}: QRScannerBottomSheetProps) {
  const [qrLoaded, setQrLoaded] = useState(false);

  const handleClose = () => {
    setQrLoaded(false);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={handleClose}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.bottomSheet}
          onPress={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Feather name="x" size={24} color={Colors.textPrimary} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* QR Code Display */}
            <View style={styles.qrContainer}>
              <Text style={styles.qrLabel}>Présentez ce QR code au client</Text>
              <View style={styles.qrImageContainer}>
                {!qrLoaded && (
                  <View style={styles.qrPlaceholder}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                  </View>
                )}
                <Image
                  source={{ uri: qrCodeUrl }}
                  style={styles.qrImage}
                  onLoad={() => setQrLoaded(true)}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.qrInstruction}>
                Le client doit scanner ce code avec son téléphone pour confirmer l'opération
              </Text>
            </View>

            {/* Info Text */}
            <View style={styles.infoContainer}>
              <Feather name="info" size={16} color={Colors.textSecondary} />
              <Text style={styles.infoText}>
                Une fois le QR code scanné par le client, le statut de la commande sera automatiquement mis à jour
              </Text>
            </View>
          </ScrollView>
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
    maxHeight: '85%',
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
  qrContainer: {
    alignItems: 'center',
    marginBottom: Spacings.s6,
  },
  qrLabel: {
    ...Typography.h6,
    color: Colors.textPrimary,
    marginBottom: Spacings.s4,
    textAlign: 'center',
  },
  qrImageContainer: {
    width: 300,
    height: 300,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: Spacings.s3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: Spacings.s4,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrPlaceholder: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrImage: {
    width: '100%',
    height: '100%',
  },
  qrInstruction: {
    ...Typography.body2,
    color: Colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: Spacings.s4,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.backgroundGrey,
    padding: Spacings.s4,
    borderRadius: 12,
    marginBottom: Spacings.s5,
  },
  infoText: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginLeft: Spacings.s2,
    flex: 1,
  },
});
