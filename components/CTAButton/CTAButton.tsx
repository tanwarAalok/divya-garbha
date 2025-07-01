// components/CTAButton.tsx
import { Link } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native'; // Import View
import { ctaButtonStyles as styles } from './styles';

interface CTAButtonProps {
  text: string;
  href: string;
  subtitle?: string; // Make subtitle optional
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, href, subtitle }) => (
  <Link href={href as any} asChild>
    <TouchableOpacity style={styles.getStarted}>
      <Text style={styles.getStartedText}>{text}</Text>
      {subtitle && <Text style={styles.getStartedSubtitle}>{subtitle}</Text>} {/* Render subtitle if provided */}
    </TouchableOpacity>
  </Link>
);

export default CTAButton;