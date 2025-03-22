import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/styles/auth.styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/theme';

type Icontype='search'|'location'|null;

export default function Index() {
  const [activeIcon, setActiveIcon]=useState<Icontype>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homepage}>
          <View style={styles.homepgbar}>
            <TouchableOpacity onPress={() => setActiveIcon('search')} activeOpacity={0.7}>
              <Ionicons name="search" size={24} color={activeIcon === 'search' ? COLORS.primary : COLORS.grey}/>
            </TouchableOpacity>
            <Text style={styles.location}>Home screen</Text>
            <TouchableOpacity onPress={()=> setActiveIcon('location')} activeOpacity={0.7}>
            <Ionicons name="location" size={24} color={activeIcon === 'location' ? COLORS.primary : COLORS.grey}/>
            </TouchableOpacity> 
          </View>
      </View>
    </SafeAreaView>
  );
}