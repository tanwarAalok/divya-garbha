import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '@/firebaseConfig'; 

export default function VerifyOtpScreen() {
  const router = useRouter();
  const { verificationId, phone } = useLocalSearchParams<{ verificationId: string; phone: string }>();
  const [otp, setOtp] = useState('');

  const handleVerifyOtp = async () => {
    if (!verificationId) {
      Alert.alert('Error', 'Verification ID is missing. Please try again.');
      return;
    }

    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);
      
      Alert.alert('Success!', 'You are now logged in.');
      router.replace('/dashboard');
    } catch (error: any) {
      Alert.alert('Verification Failed', error.message);
      console.error("OTP Verification Error:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 justify-center p-6">
        <Text className="text-3xl font-bold text-primaryText text-center mb-4">Enter Verification Code</Text>
        <Text className="text-lg text-secondaryText text-center mb-12">
          We've sent a 6-digit code to +91 {phone}.
        </Text>
        
        <TextInput
          className="bg-white p-4 rounded-xl text-lg text-center tracking-[10px] text-primaryText border border-gray-200 shadow-sm"
          placeholder="______"
          placeholderTextColor="#A1887F"
          keyboardType="number-pad"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
        />

        <TouchableOpacity
          className="bg-primaryAction py-4 rounded-full items-center my-8 shadow-lg"
          onPress={handleVerifyOtp}
        >
          <Text className="text-xl font-bold text-white">Verify & Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}