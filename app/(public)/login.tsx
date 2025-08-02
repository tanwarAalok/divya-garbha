import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { PhoneAuthProvider } from 'firebase/auth';
import { auth, firebaseApp } from '@/firebaseConfig'; 

export default function LoginPage() {
  const router = useRouter();
  const recaptchaVerifier = useRef(null);
  const [phone, setPhone] = useState('');
  
  const handleSendOtp = async () => {
    if (phone.length !== 10) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
      return;
    }
    
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        `+91${phone}`,
        recaptchaVerifier.current!
      );
      
      // Navigate to the verification screen with the verificationId and phone number
      router.push({
        pathname: '/verify-otp',
        params: { verificationId, phone },
      });

    } catch (error: any) {
      Alert.alert('OTP Error', error.message);
      console.error("OTP Sending Error:", error);
    }
  };

  const handleSignUp = () => {
    router.push('/onboarding');
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseApp.options} // Correctly use the app config here
        title="Prove you are not a robot"
        cancelLabel="Close"
      />
      <View className="flex-1 justify-center p-6">
        <View className="flex flex-col items-center px-6 pt-12">
          <Image source={require('@/assets/images/logo-t.png')} />
          <Text className="text-4xl font-bold text-primaryText text-center mb-6">Welcome Back</Text>
          <Text className="text-center text-secondaryText text-lg mb-12">Enter your phone number to log in</Text>
        </View>

        <View className="flex-row items-center bg-white p-4 rounded-xl mb-4 border border-gray-200 shadow-sm">
          <Text className="text-lg text-primaryText mr-2">+91</Text>
          <TextInput
            className="flex-1 text-lg text-primaryText"
            placeholder="98765 43210"
            placeholderTextColor="#A1887F"
            keyboardType="phone-pad"
            maxLength={10}
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <TouchableOpacity
          className="bg-primaryAction py-4 rounded-full items-center my-8 shadow-lg"
          onPress={handleSendOtp}
        >
          <Text className="text-xl font-bold text-white">Send OTP</Text>
        </TouchableOpacity>

        <View className="items-center mt-6">
          <TouchableOpacity onPress={handleSignUp}>
            <Text className="text-base text-secondaryText">
              Don't have an account?{' '}
              <Text className="font-bold underline text-primaryAction">Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}