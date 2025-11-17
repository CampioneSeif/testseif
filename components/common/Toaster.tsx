import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Spacings, Typography } from '@/theme';

import Feather from '@expo/vector-icons/Feather';
import Reclamation from '@/assets/svgs/Reclamation';

interface ToasterProps {
  message: string;
  onClose: () => void;
  type?: 'error' | 'success' | 'warning' | 'info';
}

const Toaster: React.FC<ToasterProps> = ({ message, onClose, type = 'error' }) => {
  const getColors = () => {
    switch (type) {
      case 'error':
        return {
          bg: Colors.errorLightest,
          text: Colors.error,
          icon: Colors.error,
        };
      case 'success':
        return {
          bg: Colors.successLightest,
          text: Colors.successDark,
          icon: Colors.success,
        };
      case 'warning':
        return {
          bg: Colors.warningLightest,
          text: Colors.warningDark,
          icon: Colors.warning,
        };
      case 'info':
        return {
          bg: Colors.infoLightest,
          text: Colors.infoDark,
          icon: Colors.info,
        };
      default:
        return {
          bg: Colors.errorLightest,
          text: Colors.error,
          icon: Colors.error,
        };
    }
  };

  const colors = getColors();

  const renderIcon = () => {
    if (type === 'error') {
      return <Reclamation color={colors.icon} width={20} height={20} />;
    }
    
    const iconName = type === 'success' ? 'check-circle' : type === 'warning' ? 'alert-triangle' : 'info';
    return <Feather name={iconName} size={20} color={colors.icon} />;
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <View style={styles.iconContainer}>
        {renderIcon()}
      </View>
      <Text style={[styles.message, { color: colors.text }]}>{message}</Text>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Feather name="x" size={20} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacings.s3,
    paddingHorizontal: Spacings.s4,
    borderRadius: 10,
    marginBottom: Spacings.s4,
    gap: Spacings.s3,
  },
  iconContainer: {
    flexShrink: 0,
  },
  message: {
    ...Typography.body2,
    flex: 1,
  },
  closeButton: {
    flexShrink: 0,
    padding: Spacings.s1,
  },
});

export default Toaster;
