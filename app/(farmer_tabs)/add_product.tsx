import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert, FlatList, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { styles } from '@/styles/auth.styles';

const Tab = createMaterialTopTabNavigator();

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  images: string[];
  stock: number;
  createdAt: Date;
}

// ADD PRODUCT SCREEN
function AddProductScreen({ addProduct }: { addProduct: (product: Product) => void }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [stock, setStock] = useState('');
  const navigation = useNavigation();

  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled && result.assets) {
      const newImages = result.assets.map(asset => asset.uri);
      setImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleAddProduct = () => {
    if (!name || !price || !category || !description || images.length === 0 || !stock) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    const newProduct: Product = {
      id: Math.random().toString(),
      name,
      price,
      category,
      description,
      images,
      stock: parseInt(stock, 10),
      createdAt: new Date(),
    };

    addProduct(newProduct);
  
  // Modified alert without navigation
  Alert.alert('Success', 'Product added successfully!');
    
    // Reset form fields
    setName('');
    setPrice('');
    setCategory('');
    setDescription('');
    setImages([]);
    setStock('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.header}>Add Product</Text>

        <TextInput 
          placeholder="Product Name" 
          value={name} 
          onChangeText={setName} 
          style={styles.input} 
        />
        
        <TextInput 
          placeholder="Price" 
          value={price} 
          onChangeText={setPrice} 
          keyboardType="numeric" 
          style={styles.input} 
        />

        <Text style={styles.label}>Choose Category:</Text>
        <View style={styles.pickerContainer}>
          <Picker 
            selectedValue={category} 
            onValueChange={setCategory} 
            style={styles.picker}
          >
            <Picker.Item label="🍏 Fruits" value="fruits" />
            <Picker.Item label="🥦 Vegetables" value="vegetables" />
            <Picker.Item label="🥩 Meat & Poultry" value="meat_poultry" />
            <Picker.Item label="🧀 Dairy Products" value="dairy" />
            <Picker.Item label="🐟 Fish & Seafood" value="fish" />
            <Picker.Item label="🌾 Grains & Cereals" value="grains" />
            <Picker.Item label="🥜 Nuts & Seeds" value="nuts_seeds" />
            <Picker.Item label="🍯 Honey & Spices" value="honey_spices" />
            <Picker.Item label="🫖 Beverages" value="beverages" />
            <Picker.Item label="🛒 Other" value="other" />
          </Picker>
        </View>

        <TextInput 
          placeholder="Description" 
          value={description} 
          onChangeText={setDescription} 
          multiline 
          style={[styles.input, { height: 100 }]} 
        />
        
        <TextInput 
          placeholder="Stock Quantity" 
          value={stock} 
          onChangeText={setStock} 
          keyboardType="numeric" 
          style={styles.input} 
        />

<View style={styles.imageSection}>
  <Text style={styles.label}>Product Images:</Text>
  <TouchableOpacity onPress={pickImages} style={styles.imagePicker}>
    <Ionicons name="images" size={40} color="#aaa" />
    <Text>Select Images (Max 5)</Text>
  </TouchableOpacity>

  {images.length > 0 && (
    <View style={styles.imageListContainer}>
      <FlatList
        horizontal
        data={images}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.imageWrapper}>
            <Image 
              source={{ uri: item }} 
              style={styles.selectedImage} 
              resizeMode="cover"
            />
            <TouchableOpacity 
              style={styles.removeImageButton} 
              onPress={() => removeImage(index)}
            >
              <Ionicons name="close" size={20} color="white" />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.imageListContent}
      />
    </View>
  )}
</View>

        <TouchableOpacity onPress={handleAddProduct} style={[styles.button, { marginTop: 20 }]}>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// MANAGE PRODUCTS SCREEN
function ManageProductsScreen({ products }: { products: Product[] }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            {item.images.length > 0 && (
              <Image source={{ uri: item.images[0] }} style={styles.productImage} />
            )}
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text>${item.price} | Stock: {item.stock}</Text>
              <Text>Category: {item.category}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No products available</Text>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

// STOCK TRACKING SCREEN
function StockTrackingScreen({ products }: { products: Product[] }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.stockInfo}>
              <Text>Current Stock: {item.stock}</Text>
              <View style={styles.stockBarContainer}>
                <View 
                  style={[
                    styles.stockBar,
                    { 
                      width: `${Math.min(100, (item.stock / 100) * 100)}%`,
                      backgroundColor: item.stock > 20 ? '#4CAF50' : '#F44336'
                    }
                  ]}
                />
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

// MAIN PRODUCT SCREEN
export default function ProductManagementScreen() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts(prevProducts => [product, ...prevProducts]);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarItemStyle: {flex:1 },
        tabBarStyle: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen name="Add Product">
        {() => <AddProductScreen addProduct={addProduct} />}
      </Tab.Screen>
      <Tab.Screen name="Manage Products">
        {() => <ManageProductsScreen products={products} />}
      </Tab.Screen>
      <Tab.Screen name="Stock Tracking">
        {() => <StockTrackingScreen products={products} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
