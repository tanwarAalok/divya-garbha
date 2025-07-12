// components/ConsultationFlyer/ConsultationFlyer.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

interface ConsultationFlyerProps {
  title: string;
  description: string;
  ctaText: string;
  route: string;
}

const ConsultationFlyer: React.FC<ConsultationFlyerProps> = ({ title, description, ctaText, route }) => (
  <View
    className="bg-courseBackground p-6 rounded-xl my-12 items-center shadow-lg"
  >
    <Text className="text-2xl font-bold text-white text-center mb-2">
      {title}
    </Text>
    <Text className="text-base text-white text-center mb-6 opacity-90 leading-6">
      {description}
    </Text>
    <Link href={route as any} asChild>
      <TouchableOpacity
        className="bg-primaryAction py-3 px-8 rounded-full shadow-md"
      >
        <Text className="text-lg font-bold text-white">
          {ctaText}
        </Text>
      </TouchableOpacity>
    </Link>
  </View>
);

export default ConsultationFlyer;