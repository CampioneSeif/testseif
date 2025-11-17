import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, ViewStyle } from 'react-native';
import { View } from 'react-native-ui-lib';
import { Colors, Spacings } from '@/theme';
import Feather from '@expo/vector-icons/Feather';

interface SearchBarProps {
  placeholder?: string;
  onSearchPress?: () => void;
  onFilterPress?: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
  style?: ViewStyle;
}

export default function SearchBar({
  placeholder = 'Rechercher des produits...',
  onSearchPress,
  onFilterPress,
  onChangeText,
  value,
  style,
}: SearchBarProps) {
  return (
    <View style={[styles.searchContainer, style]}>
      {/* Search Icon */}
      <Feather name="search" size={20} color={Colors.neutral600} style={styles.searchIcon} />

      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor={Colors.neutral600}
        onFocus={onSearchPress}
        onChangeText={onChangeText}
        value={value}
      />

      {/* Filter Icon */}
      <TouchableOpacity onPress={onFilterPress} style={styles.filterButton}>
        <Feather name="sliders" size={20} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: Spacings.s3,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.neutral200,
    marginHorizontal: Spacings.s4,
    marginVertical: Spacings.s2,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: Spacings.s2,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.textPrimary,
    paddingVertical: 0,
  },
  filterButton: {
    padding: Spacings.s2,
    marginLeft: Spacings.s1,
  },
});
