import { Tabs } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { COLORS } from '@/constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          height: 50,
          position: 'absolute',
          elevation: 0,
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="grid" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add_product"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="add" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="receipt" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="notifications" size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="chatbubble" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}