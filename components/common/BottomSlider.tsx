import React from 'react';
import { StyleSheet, Modal, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { View, Text, Button } from 'react-native-ui-lib';
import { Colors, Spacings } from '@/theme';

interface BottomSliderProps {
  visible: boolean;
  onClose: () => void;
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  buttonText: string;
  closeOnBackdropPress?: boolean;
  isDelete?: boolean;
  onConfirmDelete?: () => void;
  cancelButtonText?: string;
  confirmButtonText?: string;
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BottomSlider: React.FC<BottomSliderProps> = ({
  visible,
  onClose,
  icon,
  title,
  subtitle,
  buttonText,
  closeOnBackdropPress = true,
  isDelete = false,
  onConfirmDelete,
  cancelButtonText = 'Annuler',
  confirmButtonText = 'Supprimer',
}) => {
  const slideAnim = React.useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 65,
        friction: 11,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={closeOnBackdropPress ? onClose : undefined}
        />
        <Animated.View
          style={[
            styles.sliderContainer,
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.handle} />

          {icon && <View style={styles.iconContainer}>{icon}</View>}

          <Text h3 textPrimary center marginB-s3>
            {title}
          </Text>

          <Text body1 textSecondary center marginB-s6 paddingH-s3>
            {subtitle}
          </Text>

          {isDelete ? (
            <View style={styles.deleteButtons}>
              <Button
                label={cancelButtonText}
                backgroundColor="transparent"
                br40
                marginT-s4
                onPress={onClose}
                style={styles.cancelButton}
                labelStyle={styles.cancelButtonLabel}
                outline
                outlineColor={Colors.neutral400}
              />
              <Button
                label={confirmButtonText}
                backgroundColor={Colors.error}
                br40
                marginT-s4
                onPress={onConfirmDelete}
                style={styles.confirmButton}
              />
            </View>
          ) : (
            <Button
              label={buttonText}
              backgroundColor={Colors.secondary}
              br40
              marginT-s4
              onPress={onClose}
              style={styles.button}
            />
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
  },
  sliderContainer: {
    backgroundColor: Colors.background,
    borderTopLeftRadius: Spacings.s6,
    borderTopRightRadius: Spacings.s6,
    paddingHorizontal: Spacings.s5,
    paddingTop: Spacings.s3,
    paddingBottom: Spacings.s7,
    alignItems: 'center',
    minHeight: 350,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: Colors.neutral300,
    borderRadius: 2,
    marginBottom: Spacings.s5,
  },
  iconContainer: {
    marginBottom: Spacings.s5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
  },
  deleteButtons: {
    flexDirection: 'row',
    gap: Spacings.s3,
    width: '100%',
  },
  cancelButton: {
    flex: 1,
  },
  cancelButtonLabel: {
    color: Colors.textPrimary,
  },
  confirmButton: {
    flex: 1,
  },
});

export default BottomSlider;
