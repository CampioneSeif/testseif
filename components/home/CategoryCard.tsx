import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-ui-lib';
import { Colors, Spacings, Typography } from '@/theme';
import { CategoryImage } from '@/components/common/CategoryImage';
import { Category } from '@/types/categorie';

interface CategoryCardProps {
  item: Category;
  isSelected?: boolean;
  onPress?: (category: Category) => void;
}

export default function CategoryCard({ item, isSelected = false, onPress }: CategoryCardProps) {
  return (
    <TouchableOpacity style={styles.categoryCard} onPress={() => onPress?.(item)}>
      <CategoryImage
        imageUri={`${process.env.EXPO_PUBLIC_API_URL}/${item.image_path}`}
        size={72}
        containerStyle={[
          { marginBottom: Spacings.s2 },
          isSelected && styles.selectedImageContainer,
        ]}
      />
      <Text
        style={[styles.categoryName, isSelected && styles.selectedCategoryName]}
        numberOfLines={1}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    alignItems: 'center',
    marginRight: Spacings.s4,
    width: 80,
  },
  categoryName: {
    ...Typography.caption,
    fontWeight: '500',
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  selectedImageContainer: {
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
  },
  selectedCategoryName: {
    color: Colors.primary,
    fontWeight: '700',
  },
});
