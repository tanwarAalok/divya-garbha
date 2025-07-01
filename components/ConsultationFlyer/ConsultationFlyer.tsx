// components/ConsultationFlyer/ConsultationFlyer.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { consultationFlyerStyles as styles } from './styles';

interface ConsultationFlyerProps {
  title: string;
  description: string;
  ctaText: string;
  route: string;
}

const ConsultationFlyer: React.FC<ConsultationFlyerProps> = ({ title, description, ctaText, route }) => (
  <View style={styles.flyerCard}>
    <Text style={styles.flyerTitle}>{title}</Text>
    <Text style={styles.flyerDescription}>{description}</Text>
    <Link href={route as any} asChild>
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaButtonText}>{ctaText}</Text>
      </TouchableOpacity>
    </Link>
  </View>
);

export default ConsultationFlyer;