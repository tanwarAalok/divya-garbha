// components/CTAButton.tsx
import { Link } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface CTAButtonProps {
  text: string;
  href: string;
  subtitle?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, href, subtitle }) => (
  <Link href={href as any} asChild>
    <TouchableOpacity
      className="rounded-full shadow-lg" // Apply shadow to the touchable opacity for a better effect
    >
      <View className="bg-primaryAction items-center justify-center py-4 px-10 rounded-full">
        <Text className="text-white font-bold text-xl tracking-wider">
          {text}
        </Text>
        {subtitle && (
          <Text className="text-white text-sm mt-1 opacity-80 text-center">
            {subtitle}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  </Link>
);

export default CTAButton;