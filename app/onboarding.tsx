// app/onboarding.tsx
import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { onboardingStyles as styles } from '../styles/onboardingStyles';
import { ONBOARDING_CONTENT } from '../constants/data';
import { SPACING } from '@/constants/theme';

export default function OnboardingPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: SPACING.large }}>
        <Image source={require('../assets/images/mother.png')} style={styles.logo} /> {/* Replace with your app logo */}
        <Text style={styles.welcomeTitle}>{ONBOARDING_CONTENT.welcomeTitle}</Text>
        <Text style={styles.welcomeSubtitle}>{ONBOARDING_CONTENT.welcomeSubtitle}</Text>

        {/* Optional: Add feature cards if desired */}
        {/* {ONBOARDING_CONTENT.features.map((feature, index) => (
          <View key={index} style={styles.featureCard}>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <Text style={styles.featureDescription}>{feature.description}</Text>
          </View>
        ))} */}

        <Link href="/login" asChild>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>{ONBOARDING_CONTENT.ctaSignup}</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/login" asChild>
          <TouchableOpacity style={styles.loginLink}>
            <Text style={styles.loginLinkText}>{ONBOARDING_CONTENT.ctaLogin}</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}