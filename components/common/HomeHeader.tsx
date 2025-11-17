import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import Feather from '@expo/vector-icons/Feather';
import SearchBar from './SearchBar';

interface HomeHeaderProps {
  userName?: string;
  onMenuPress?: () => void;
  onNotificationPress?: () => void;
  onSearchPress?: () => void;
  onFilterPress?: () => void;
  onSearchChange?: (text: string) => void;
  searchValue?: string;
}

export default function HomeHeader({
  userName = 'Utilisateur',
  onMenuPress,
  onNotificationPress,
  onSearchPress,
  onFilterPress,
  onSearchChange,
  searchValue,
}: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      {/* First Row - Greeting and Icons */}
      <View style={styles.topRow}>
        {/* Left - Menu Icon */}
        <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
          <Feather name="menu" size={28} color={Colors.white} />
        </TouchableOpacity>

        {/* Center - Greeting */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Bonjour, </Text>
          <Text style={styles.userName} numberOfLines={1}>
            {userName}
          </Text>
        </View>

        {/* Right - Notification Icon */}
        <TouchableOpacity onPress={onNotificationPress} style={styles.iconButton}>
          <View>
            <Feather name="bell" size={26} color={Colors.white} />
            {/* Notification badge - optional */}
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Second Row - Search Bar */}
      <View style={styles.searchRow}>
        <SearchBar
          onSearchPress={onSearchPress}
          onFilterPress={onFilterPress}
          onChangeText={onSearchChange}
          value={searchValue}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: Spacings.s10,
    paddingBottom: Spacings.s4,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacings.s4,
    marginBottom: Spacings.s4,
  },
  iconButton: {
    padding: Spacings.s1,
    width: 44,
    alignItems: 'center',
  },
  greetingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacings.s2,
  },
  greetingText: {
    ...Typography.subtitle1,
    color: Colors.white,
    fontWeight: '400',
  },
  userName: {
    ...Typography.subtitle1,
    color: Colors.white,
    fontWeight: '700',
    maxWidth: 150,
  },
  notificationBadge: {
    position: 'absolute',
    top: -Spacings.s1,
    right: -Spacings.s1,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacings.s1,
  },
  badgeText: {
    color: Colors.white,
    ...Typography.overline,
    fontSize: 10,
    fontWeight: '700',
  },
  searchRow: {
    paddingHorizontal: Spacings.s4,
  },
});
