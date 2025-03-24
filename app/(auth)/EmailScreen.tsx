import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '@/styles/auth.styles';
import axios from 'axios';
import { useRouter } from 'expo-router';

const EmailScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const handleCheckEmail = async () => {
    try {
      // Call your backend endpoint to check if the email exists
      const response = await axios.post('https://url/api/check-email', {
        email,
      });

      if (response.data.exists) {
        // If email exists, redirect to forgot password screen
        router.push('/ForgotPassword');
      } else {
        // If email does not exist, show an alert with options
        Alert.alert(
          'No Account Found',
          'There is no account with this email. Do you want to sign up or try again?',
          [
            {
              text: 'Try Again',
              onPress: () => setEmail(''), // Clear the email input
              style: 'cancel',
            },
            {
              text: 'Sign Up',
              onPress: () => router.push('/Signupscreen'), // Redirect to signup screen
            },
          ]
        );
      }
    } catch (error) {
      console.error('Error checking email:', error);
      Alert.alert(
        'Error',
        'An error occurred while checking your email. Please try again.'
      );
    }
  };

  return (
    <View>
      <Text style={styles.label}>Enter your email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleCheckEmail}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailScreen;