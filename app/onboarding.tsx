// app/onboarding.tsx
import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Link } from 'expo-router';
// No longer importing onboardingStyles as styles are now in Tailwind classes
// import { onboardingStyles as styles } from '../styles/onboardingStyles';

import { ONBOARDING_CONTENT } from '@/constants/data';
// No longer directly importing SPACING or other theme constants as they are in Tailwind config or defaults.
// import { SPACING } from '@/constants/theme';

const { width, height } = Dimensions.get('window'); // Get screen width and height for responsive carousel cards

export default function OnboardingPage() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 48 /* SPACING.xxxl */ }}>
        {/* Main Welcome Section */}
        <View className="flex flex-col items-center px-large pt-xxxl mb-extraLarge">
          <Image source={require('../assets/images/mother.png')} className="w-[180px] h-[180px] object-contain mb-extraLarge" />
          <Text className="text-h1 font-bold text-primaryText text-center mb-small" style={{ fontFamily: 'Playfair Display, serif' /* Assuming font is loaded */ }}>
            {ONBOARDING_CONTENT.welcomeTitle}
          </Text>
          <Text className="text-lg text-secondaryText text-center mb-extraLarge px-medium leading-[1.3em]"> {/* lineHeight: FONT_SIZES.large * 1.3 */}
            {ONBOARDING_CONTENT.welcomeSubtitle}
          </Text>
        </View>

        {/* Welcome Carousel / Feature Cards */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          className="h-[45vh] max-h-[350px] mb-xxl"
          contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 16 /* SPACING.large */ }}
        >
          {ONBOARDING_CONTENT.features.map((feature, index) => (
            <View
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-center bg-white p-large rounded-large mx-small shadow-md"
              style={{ width: width * 0.8 }} // Card takes 80% of screen width
            >
              <Image source={feature.image} className="w-[120px] h-[120px] object-contain mb-medium" />
              <Text className="text-lg font-bold text-primaryText text-center mb-tiny"> {/* SPACING.small / 2 */}
                {feature.title}
              </Text>
              <Text className="text-base text-secondaryText text-center leading-[1.4em]"> {/* lineHeight: FONT_SIZES.medium * 1.4 */}
                {feature.description}
              </Text>
            </View>
          ))}
        </ScrollView>
        {/* You might add pagination dots here if desired, but for MVP, a simple scroll is fine */}

        {/* Call to Action Buttons */}
        <View className="w-4/5 flex flex-col items-center mt-large">
          <Link href="/login" asChild> {/* Changed to login for MVP, signup flow can be integrated later */}
            <TouchableOpacity className="bg-primaryAction py-medium px-extraLarge rounded-full mb-medium w-full items-center shadow-lg">
              <Text className="text-lg font-bold text-white">
                {ONBOARDING_CONTENT.ctaSignup}
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/login" asChild>
            <TouchableOpacity className="p-small">
              <Text className="text-base font-bold underline text-primaryAction">
                {ONBOARDING_CONTENT.ctaLogin}
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}