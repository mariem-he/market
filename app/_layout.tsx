import { COLORS } from "@/constants/theme";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor: COLORS.background,}}>
      <Stack  screenOptions={{headerShown: false,}}>
        <Stack.Screen name="buyer_tabs/index" options={{ title: 'Home' }} />
        <Stack.Screen name="auth/LoginScreen" options={{ title: 'Login' }} />
        <Stack.Screen name="auth/SignupScreen" options={{ title: 'Sign Up' }} />
      </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
