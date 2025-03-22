import { View, Text, TouchableOpacity, StatusBar, ScrollView, Image, FlatList, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/theme';
//import {Appels} from '../assets/images/apple.png'; 


interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  unit: string;
}

const mockProducts: Product[] = [
  { id: '1', name: 'Fresh Apples', price: '3dt', category: 'Fruits',image:'https://via.placeholder.com/150', unit: 'per kg' },
  { id: '2', name: 'Bananas', price: '7dt', category: 'Fruits', image: 'https://via.placeholder.com/150', unit: 'per kg' },
  { id: '3', name: 'Avocados', price: '5dt', category: 'Fruits', image: 'https://via.placeholder.com/150', unit: 'each' },
  { id: '4', name: 'Broccoli', price: '5dt', category: 'Vegetables', image: 'https://via.placeholder.com/150', unit: 'head' },
  { id: '5', name: 'Carrots', price: '2dt', category: 'Vegetables', image: 'https://via.placeholder.com/150', unit: 'per kg' },
  { id: '6', name: 'Peppers', price: '3dt', category: 'Vegetables', image: 'https://via.placeholder.com/150', unit: 'per kg' },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity 
      style={{ 
        backgroundColor: 'white',
        borderRadius: 16,
        margin: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width: 160,
      }}
    >
      <Image 
        source={{ uri: item.image }} 
        style={{ 
          width: '100%', 
          height: 120, 
          borderRadius: 12,
          marginBottom: 12
        }} 
      />
      <View style={{ padding: 4 }}>
        <Text style={{ 
          fontWeight: 'bold', 
          fontSize: 16,
          marginBottom: 4
        }}>
          {item.name}
        </Text>
        <Text style={{ 
          color: COLORS.grey, 
          fontSize: 14,
          marginBottom: 8
        }}>
          {item.category}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ 
            color: COLORS.primary, 
            fontWeight: 'bold',
            fontSize: 18
          }}>
            {item.price}
          </Text>
          <Text style={{ color: COLORS.grey, fontSize: 12 }}>
            {item.unit}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderProductSection = (title: string, data: Product[]) => (
    <View style={{ marginVertical: 16 }}>
      <Text style={{ 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginLeft: 16, 
        marginBottom: 12
      }}>
        {title}
      </Text>
      <FlatList
        data={data}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
            Fresh Produce
          </Text>
          
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            backgroundColor: '#F0F0F0', 
            borderRadius: 12, 
            padding: 12,
            marginBottom: 16
          }}>
            <Ionicons name="search" size={20} color={COLORS.grey} />
            <TextInput
              style={{ flex: 1, marginLeft: 8, fontSize: 16 }}
              placeholder="Search fruits and vegetables..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {renderProductSection('Fruits', mockProducts.filter(p => p.category === 'Fruits'))}
        {renderProductSection('Vegetables', mockProducts.filter(p => p.category === 'Vegetables'))}
      </ScrollView>
    </SafeAreaView>
  );
}