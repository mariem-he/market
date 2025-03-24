// LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { Link, useNavigation } from '@react-navigation/native';
import { styles } from '@/styles/auth.styles';
import { router } from 'expo-router';
import ApiService from '@/services/api';

// Define types
type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  AdminDashboard: undefined;
  FarmerDashboard: undefined;
  BuyerDashboard: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type UserRole = 'admin' | 'farmer' | 'buyer';

interface LoginResponse {
  token: string;
  user: {
    id: number;
    role: UserRole;
    name: string;
    email: string;
  };
}

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async (): Promise<void> => {
    // Validate inputs
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Call Laravel Sanctum login endpoint
      const response = await ApiService.login({
        email,
        password
      });
      
      // Store auth token
      await AsyncStorage.setItem('userToken', response.token);
      if (response.user && response.user.role) {
        await AsyncStorage.setItem('userRole', response.user.role);
        await AsyncStorage.setItem('userId', response.user.id.toString());

      
        // Navigate to appropriate dashboard based on role
        switch(response.user.role) {
          case 'admin':
            //router.replace('/admin');
            break;
          case 'farmer':
            router.replace('/(farmer_tabs)/dashboard');
            break;
          case 'buyer':
            router.replace('/(buyer_tabs)');
            break;
          default:
            router.replace('/');
        }
      } else {
        // If role information is missing
        router.replace('/');
      }
        
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert(
        'Login Failed',
        axios.isAxiosError(error) && error.response?.data?.message 
          ? error.response.data.message 
          : 'Please check your credentials and try again'
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        
        <Text style={styles.title}>AgriChain Marketplace</Text>
      </View>
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity 
          style={styles.button}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.forgotPasswordButton}
          onPress={() => router.push('./EmailScreen')}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/Signupscreen')}>
            <Text>Go to Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;
