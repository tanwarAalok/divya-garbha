// app/onboarding.tsx
import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Link } from 'expo-router';

import { ONBOARDING_CONTENT } from '@/constants/data';

const { width } = Dimensions.get('window');

export default function OnboardingPage() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 48 }}>
        <View className="flex items-center px-6 pt-12">
          <Image source={require('../assets/images/logo-500.png')} />
        </View>

        <View className="w-4/5 flex flex-col items-center">
          <Link href="/login" asChild>
            <TouchableOpacity className="bg-primaryAction py-4 px-8 rounded-full mb-4 w-full items-center shadow-lg">
              <Text className="text-lg font-bold text-white">
                {ONBOARDING_CONTENT.ctaSignup}
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/login" asChild>
            <TouchableOpacity className="p-4">
              <Text className="text-base text-secondaryText">
                Already have an account?{' '}
                <Text className="font-bold underline text-primaryAction">
                  Login
                </Text>
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}