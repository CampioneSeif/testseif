import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';
import { Colors } from '@/theme';

// Custom tab bar icon component
function TabBarIcon({
  name,
  color,
  size = 24,
  focused,
}: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
  size?: number;
  focused: boolean;
}) {
  return (
    <View
      style={[
        styles.iconContainer,
        focused && { borderTopColor: Colors.secondary, borderTopWidth: 3 },
      ]}
    >
      <Feather name={name} size={size} color={color} />
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        // tabBarInactiveTintColor: Colors.neutral600,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Acceuil',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="home" color={color} size={24} focused={focused}/>,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="shopping-bag" color={color} size={24}  focused={focused}/>
          ),
        }}
      />
      <Tabs.Screen
        name="middle"
        options={{
          title: 'Promos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="percent" color={color} size={24} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="panier"
        options={{
          title: 'Panier',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="shopping-cart" color={color} size={24} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Mon shop',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="user" color={color} size={24}  focused={focused}/>,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 3,
    borderTopColor: 'transparent',
    width: 50,
    paddingTop: 4,
  },
});