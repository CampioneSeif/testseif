import React, { useRef } from 'react';
import {
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  PanResponder,
  Image,
} from 'react-native';
import { BrandLogo } from '@/components/common/BrandLogo';
import { View, Text, Button } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';
import { Promo } from '@/types/promotion';

const { height } = Dimensions.get('window');

interface PromoBottomSheetProps {
  visible: boolean;
  promo: Promo | null;
  onClose: () => void;
  onSubscribe: (promo: Promo) => void;
}

export default function PromoBottomSheet({
  visible,
  promo,
  onClose,
  onSubscribe,
}: PromoBottomSheetProps) {
  // Pan responder for swipe down gesture - must be called before any conditional returns
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // Respond to downward vertical swipes
        const isVerticalSwipe = Math.abs(gestureState.dy) > Math.abs(gestureState.dx);
        const isDownward = gestureState.dy > 5;
        return isVerticalSwipe && isDownward;
      },
      onMoveShouldSetPanResponderCapture: (_, gestureState) => {
        const isVerticalSwipe = Math.abs(gestureState.dy) > Math.abs(gestureState.dx);
        const isDownward = gestureState.dy > 5;
        return isVerticalSwipe && isDownward;
      },
      onPanResponderRelease: (_, gestureState) => {
        // Close if swiped down more than 80 pixels or with sufficient velocity
        const swipeDistance = gestureState.dy;
        const swipeVelocity = gestureState.vy;

        if (swipeDistance > 80 || swipeVelocity > 0.5) {
          onClose();
        }
      },
    })
  ).current;

  // Early return after all hooks
  if (!promo) return null;

  const handleSubscribe = () => {
    onSubscribe(promo);
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
        <View style={styles.bottomSheet}>
          {/* Drag Handle - Larger touch area */}
          <View {...panResponder.panHandlers} style={styles.dragHandleContainer}>
            <View style={styles.dragHandle} />
          </View>

          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            {/* Row 1: Picture */}
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: `${process.env.EXPO_PUBLIC_API_URL}/${promo.image}` }}
                style={styles.productImage}
                resizeMode="contain"
              />
              <BrandLogo
                logoUri={`${process.env.EXPO_PUBLIC_API_URL}/${promo.brandLogo}`}
                size={36}
                containerStyle={styles.brandLogoContainer}
              />
            </View>

            {/* Row 2: Title & Prices */}
            <View style={styles.headerRow}>
              <Text style={styles.title}>{promo.name}</Text>
              <View style={styles.pricesContainer}>
                <Text style={styles.originalPrice}>{promo.basePrice}</Text>
                <Text style={styles.discountedPrice}>{promo.discountedPrice?.toFixed(2)} Dt</Text>
              </View>
            </View>

            {/* Row 3: Description */}
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionTitle}>Description</Text>
              <Text style={styles.descriptionText}>{promo.description}</Text>
            </View>

            {/* Row 4: Subscribe Button */}
            <View style={styles.buttonContainer}>
              <Button
                label="Adhérer à la promotion"
                onPress={handleSubscribe}
                backgroundColor={Colors.primary}
                style={styles.subscribeButton}
                labelStyle={styles.buttonLabel}
                iconSource={() => (
                  <Feather
                    name="shopping-bag"
                    size={20}
                    color={Colors.white}
                    style={styles.buttonIcon}
                  />
                )}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backdrop: {
    flex: 1,
  },
  bottomSheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: height * 0.85,
    paddingTop: Spacings.s3,
    paddingHorizontal: Spacings.s5,
    paddingBottom: Spacings.s6,
  },
  dragHandleContainer: {
    alignItems: 'center',
    paddingVertical: Spacings.s4,
    marginBottom: Spacings.s3,
    marginHorizontal: -Spacings.s5,
    paddingHorizontal: Spacings.s5,
  },
  dragHandle: {
    width: 50,
    height: 5,
    backgroundColor: Colors.neutral400,
    borderRadius: 3,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
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
    top: Spacings.s3,
    right: Spacings.s3,
  },
  discountBadge: {
    position: 'absolute',
    top: Spacings.s3,
    right: Spacings.s3,
    // backgroundColor: Colors.primary,
    paddingHorizontal: Spacings.s3,
    paddingVertical: Spacings.s2,
    borderRadius: 12,
  },
  discountText: {
    color: Colors.white,
    ...Typography.body2,
    fontWeight: '700',
  },
  headerRow: {
    marginBottom: Spacings.s4,
  },
  title: {
    ...Typography.h3,
    color: Colors.textPrimary,
    marginBottom: Spacings.s3,
  },
  pricesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacings.s3,
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
  descriptionContainer: {
    marginBottom: Spacings.s6,
  },
  descriptionTitle: {
    ...Typography.h5,
    color: Colors.textPrimary,
    marginBottom: Spacings.s2,
  },
  descriptionText: {
    ...Typography.body1,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  buttonContainer: {
    marginBottom: Spacings.s4,
  },
  subscribeButton: {
    height: 56,
    borderRadius: 12,
  },
  buttonLabel: {
    ...Typography.button,
    color: Colors.white,
  },
  buttonIcon: {
    marginRight: Spacings.s2,
  },
});
