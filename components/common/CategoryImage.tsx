import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { Colors } from '@/theme';

interface CategoryImageProps {
  imageUri?: string | null;
  size?: number;
  containerStyle?: object;
  imageStyle?: object;
}

export const CategoryImage = ({
  imageUri,
  size = 56,
  containerStyle,
  imageStyle,
}: CategoryImageProps) => {
  if (!imageUri) return null;

  const isSvg = typeof imageUri === 'string' && imageUri.toLowerCase().endsWith('.svg');

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
        },
        containerStyle,
      ]}
    >
      {isSvg ? (
        <SvgUri
          width={size * 0.7}
          height={size * 0.7}
          uri={imageUri}
          style={[styles.image, imageStyle]}
        />
      ) : (
        <Image
          source={{ uri: imageUri as string }}
          style={[
            styles.image,
            {
              width: '100%',
              height: '100%',
            },
            imageStyle,
          ]}
          resizeMode="cover"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryLightest,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
