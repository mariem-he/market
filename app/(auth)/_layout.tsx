import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="LoginScreen" options={{ title: 'Login' }} />
      <Stack.Screen name="SignupScreen" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="EmailScreen" options={{title:'Email'}} />
    </Stack>
  );
}