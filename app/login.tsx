// app/login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { loginStyles as styles } from '../styles/loginStyles';
import { COLORS } from '../constants/theme'; // Ensure COLORS is imported for placeholderTextColor

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
    router.push('/forgot-password');
  };

  const handleSignUp = () => {
    console.log('Navigating to onboarding/signup page.');
    router.push('/onboarding');
  };

  return (
    <SafeAreaView style={styles.safeArea}> {/* Apply primary flex & background here */}
      <View style={styles.contentContainer}> {/* NEW: This inner View gets the padding */}
        <Text style={styles.headerText}>Login to Your Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={COLORS.secondaryText} // Use secondaryText for placeholders
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={COLORS.secondaryText} // Use secondaryText for placeholders
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}