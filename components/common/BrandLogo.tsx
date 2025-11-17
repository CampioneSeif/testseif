import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { Spacings, Colors } from '@/theme';

interface BrandLogoProps {
  logoUri?: string | null;
  size?: number;
  containerStyle?: object;
  imageStyle?: object;
}

export const BrandLogo = ({
  logoUri,
  size = 40,
  containerStyle,
  imageStyle,
}: BrandLogoProps) => {
  if (!logoUri) return null;

  const isSvg = typeof logoUri === 'string' && logoUri.toLowerCase().endsWith('.svg');
  const containerSize = size + Spacings.s2 * 2; // Add padding to the container

  return (
    <View 
      style={[
        styles.container, 
        { 
          width: containerSize, 
          height: containerSize, 
          borderRadius: containerSize / 2,
        },
        containerStyle
      ]}
    >
      {isSvg ? (
        <SvgUri
          width={size}
          height={size}
          uri={logoUri}
          style={[styles.image, imageStyle]}
        />
      ) : (
        <Image
          source={{ uri: logoUri as string }}
          style={[
            styles.image, 
            { 
              width: size, 
              height: size, 
              borderRadius: size / 2 
            },
            imageStyle
          ]}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacings.s1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
