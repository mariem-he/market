// SignupScreen.tsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,  
  ScrollView,
  ActivityIndicator, 
  Alert 
} from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '@/styles/auth.styles';
import { RootStackParamList } from '@/.expo/types/navigation';
import { router } from 'expo-router';

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

type UserRole = 'farmer' | 'buyer';

interface RegisterResponse {
  success: boolean;
  message: string;
  user?: {
    id: number;
    name: string;
    email: string;
  };
}

const SignupScreen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [role, setRole] = useState<UserRole>('buyer');
  const [phone, setPhone] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation<SignupScreenNavigationProp>();

  const handleSignup = async (): Promise<void> => {
    // Validate inputs
    if (!name || !email || !password || !confirmPassword || !phone) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    
    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Call Laravel Sanctum registration endpoint
      const response = await axios.post<RegisterResponse>('https://your-api-url.com/api/register', {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
        role,
        phone
      });
      
      Alert.alert(
        'Registration Successful',
        'Your account has been created. Please log in.',
        [{ text: 'OK', onPress: () => router.push('/(auth)/LoginScreen') }]
      );
      
    } catch (error) {
      console.error('Signup error:', error);
      Alert.alert(
        'Registration Failed',
        axios.isAxiosError(error) && error.response?.data?.message 
          ? error.response.data.message 
          : 'Please check your information and try again'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join the AgriChain Marketplace</Text>
        
        <View style={styles.formContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
          />
          
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          
          <Text style={styles.label}>I am a:</Text>
          <View style={styles.pickerContainer}>
            <Picker<UserRole>
              selectedValue={role}
              onValueChange={(itemValue) => setRole(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Buyer" value="buyer" />
              <Picker.Item label="Farmer" value="farmer" />
            </Picker>
          </View>
          
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Create a password (min. 8 characters)"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          
          <TouchableOpacity 
            style={styles.button}
            onPress={handleSignup}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.buttonText}>Create Account</Text>
            )}
          </TouchableOpacity>
          
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/LoginScreen')}>
              <Text style={styles.loginLink}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignupScreen;