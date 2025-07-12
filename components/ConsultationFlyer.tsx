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
    className="bg-courseBackground p-large rounded-medium my-large items-center shadow-lg"
  >
    <Text className="text-lg font-bold text-white text-center mb-small">
      {title}
    </Text>
    <Text className="text-base text-white text-center mb-medium opacity-90">
      {description}
    </Text>
    <Link href={route as any} asChild>
      <TouchableOpacity
        className="bg-primaryAction py-medium px-extraLarge rounded-full shadow-md"
      >
        <Text className="text-lg font-bold text-white">
          {ctaText}
        </Text>
      </TouchableOpacity>
    </Link>
  </View>
);

export default ConsultationFlyer;