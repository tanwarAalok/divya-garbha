// app/login.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router'; // Import useRouter
import { loginStyles as styles } from '../styles/loginStyles';
import { COLORS } from '@/constants/theme';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize router

  const handleLogin = () => {
    // In a real app, you'd perform actual authentication here (Firebase, custom backend, etc.)
    if (email === 'user@example.com' && password === 'password123') {
      Alert.alert('Login Successful', 'Welcome back!');
      router.replace('/dashboard'); // Navigate to dashboard on successful login
    } else {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Login to Your Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={COLORS.softText}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={COLORS.softText}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <Link href="/forgot-password" asChild>
          <TouchableOpacity>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/onboarding" asChild>
          <TouchableOpacity>
            <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}