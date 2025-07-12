// app/login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
// No longer importing loginStyles as styles are now in Tailwind classes
// import { loginStyles as styles } from '../styles/loginStyles';
// No longer importing COLORS directly as they are in Tailwind config.
// import { COLORS } from '@/constants/theme';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password123') {
      Alert.alert('Login Successful', 'Welcome back!');
      router.replace('/dashboard');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };

  const handleForgotPassword = () => {
    console.log('Navigating to forgot password page.');
    // router.push('/forgot-password'); // Uncomment and use if you have this route
    Alert.alert('Forgot Password', 'Simulating navigation to forgot password.');
  };

  const handleSignUp = () => {
    console.log('Navigating to onboarding/signup page.');
    router.push('/onboarding');
  };

  return (
    <SafeAreaView className="flex-1 bg-background"> {/* safeArea style */}
      <View className="flex-1 justify-center p-large"> {/* contentContainer style */}
        <Text className="text-h1 font-bold text-primaryText text-center mb-extraLarge">
          Login to Your Account
        </Text>

        <TextInput
          className="bg-white p-medium rounded-medium mb-medium text-base text-primaryText border border-lightGray shadow-sm"
          placeholder="Email"
          placeholderTextColor="#6D4C41" // Use hex for specific placeholder color
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="bg-white p-medium rounded-medium mb-medium text-base text-primaryText border border-lightGray shadow-sm"
          placeholder="Password"
          placeholderTextColor="#6D4C41" // Use hex for specific placeholder color
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          className="bg-primaryAction py-medium rounded-full items-center my-large shadow-lg"
          onPress={handleLogin}
        >
          <Text className="text-lg font-bold text-white">
            Login
          </Text>
        </TouchableOpacity>

        <View className="items-center mt-medium">
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text className="text-base font-semibold underline text-primaryAction mb-small">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignUp}>
            <Text className="text-base font-semibold underline text-primaryAction">
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}