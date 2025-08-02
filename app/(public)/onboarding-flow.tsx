import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { PhoneAuthProvider } from 'firebase/auth';
import { auth, firebaseApp } from '../../firebaseConfig'; // Import firebaseApp

// A simple progress bar component
const ProgressBar = ({ progress }: { progress: number }) => (
  <View className="w-full bg-accentHighlight rounded-full h-2.5 mb-8">
    <View className="bg-primaryAction h-2.5 rounded-full" style={{ width: `${progress}%` }} />
  </View>
);

export default function OnboardingFlowScreen() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();
  const recaptchaVerifier = useRef(null);

  const handleNext = () => {
    if (step === 1 && !name) {
      Alert.alert('Please enter your name');
      return;
    }
    if (step === 2 && !dueDate) {
      Alert.alert('Please enter your due date');
      return;
    }
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSendOtp();
    }
  };

  const handleSendOtp = async () => {
    if (phone.length !== 10) {
        Alert.alert('Please enter a valid 10-digit phone number');
        return;
    }
    
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        `+91${phone}`,
        recaptchaVerifier.current!
      );
      
      // In a real app, you would also save the name and dueDate to your database here.
      router.push({
        pathname: '/verify-otp',
        params: { verificationId, phone },
      });

    } catch (error: any) {
      Alert.alert('OTP Error', error.message);
      console.error("OTP Sending Error:", error);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Text className="text-3xl font-bold text-primaryText text-center mb-4">What should we call you?</Text>
            <Text className="text-lg text-secondaryText text-center mb-12">This helps us personalize your journey.</Text>
            <TextInput
              className="bg-white p-4 rounded-xl text-lg text-primaryText border border-gray-200 shadow-sm"
              placeholder="Your first name"
              placeholderTextColor="#A1887F"
              value={name}
              onChangeText={setName}
            />
          </>
        );
      case 2:
        return (
          <>
            <Text className="text-3xl font-bold text-primaryText text-center mb-4">When is your baby due?</Text>
            <Text className="text-lg text-secondaryText text-center mb-12">This is used to tailor content to your specific trimester.</Text>
            <TextInput
              className="bg-white p-4 rounded-xl text-lg text-primaryText border border-gray-200 shadow-sm"
              placeholder="YYYY-MM-DD"
              placeholderTextColor="#A1887F"
              value={dueDate}
              onChangeText={setDueDate}
              keyboardType="numeric"
            />
          </>
        );
      case 3:
        return (
          <>
            <Text className="text-3xl font-bold text-primaryText text-center mb-4">Create your secure account</Text>
            <Text className="text-lg text-secondaryText text-center mb-12">We'll send a one-time password (OTP) to verify your number.</Text>
            <TextInput
              className="bg-white p-4 rounded-xl text-lg text-primaryText border border-gray-200 shadow-sm"
              placeholder="Your phone number"
              placeholderTextColor="#A1887F"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseApp.options} // Correctly use the app config here
        title="Prove you are not a robot"
        cancelLabel="Close"
      />
      <View className="flex-1 justify-between p-6">
        <View>
          <ProgressBar progress={(step / 3) * 100} />
          {renderStepContent()}
        </View>

        <TouchableOpacity
          className="bg-primaryAction py-4 rounded-full items-center shadow-lg"
          onPress={handleNext}
        >
          <Text className="text-xl font-bold text-white">
            {step < 3 ? 'Continue' : 'Send OTP'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}