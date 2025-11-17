import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
  backgroundColor?: string;
}

export default function Header({
  title,
  showBackButton = false,
  onBackPress,
  rightComponent,
  backgroundColor = Colors.primary,
}: HeaderProps) {
  const router = useRouter();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        {/* Left side - Back button or empty space */}
        <View style={styles.leftContainer}>
          {showBackButton && (
            <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
              <Feather name="arrow-left-circle" size={30} color={Colors.white} />
            </TouchableOpacity>
          )}
        </View>

        {/* Center - Title */}
        <View style={styles.centerContainer}>
          {title && (
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
          )}
        </View>

        {/* Right side - Custom component or empty space */}
        <View style={styles.rightContainer}>{rightComponent}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Spacings.s10,
    paddingBottom: Spacings.s3,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacings.s4,
    minHeight: 44,
  },
  leftContainer: {
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacings.s2,
  },
  rightContainer: {
    width: 44,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  backButton: {
    padding: Spacings.s1,
  },
  title: {
    ...Typography.h5,
    color: Colors.white,
  },
});
