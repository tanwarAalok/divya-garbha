// app/login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';

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
    // router.push('/forgot-password');
    Alert.alert('Forgot Password', 'Simulating navigation to forgot password.');
  };

  const handleSignUp = () => {
    console.log('Navigating to onboarding/signup page.');
    router.push('/onboarding');
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 justify-center p-6">

        <View className="flex flex-col items-center px-6 pt-12">
          <Image source={require('../assets/images/logo-t.png')}  />
          <Text className="text-4xl font-bold text-primaryText text-center mb-6">
            Welcome Back
          </Text>
          <Text className="text-center text-secondaryText text-lg mb-12">
            Login to your account to continue
          </Text>
        </View>


        <TextInput
          className="bg-white p-4 rounded-xl mb-4 text-base text-primaryText border border-gray-200 shadow-sm"
          placeholder="Email Address"
          placeholderTextColor="#A1887F"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="bg-white p-4 rounded-xl mb-6 text-base text-primaryText border border-gray-200 shadow-sm"
          placeholder="Password"
          placeholderTextColor="#A1887F"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          className="bg-primaryAction py-4 rounded-full items-center my-8 shadow-lg"
          onPress={handleLogin}
        >
          <Text className="text-xl font-bold text-white">
            Login
          </Text>
        </TouchableOpacity>

        <View className="items-center mt-6">
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text className="text-base font-semibold underline text-primaryAction mb-2">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignUp}>
            <Text className="text-base text-secondaryText">
              Don't have an account?{' '}
              <Text className="font-bold underline text-primaryAction">
                Sign Up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}