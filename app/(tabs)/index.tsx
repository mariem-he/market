import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View>
      <Text>Home screen</Text>
      <Link href={"/(tabs)/notifications"}>visit notif screen</Link>
    </View>
  );
}