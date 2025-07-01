import React from 'react';
import { Image, Text, View } from 'react-native';
import { heroSectionStyles as styles } from './styles';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSource: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, imageSource }) => (
  <View style={styles.hero}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
    <Image source={imageSource} style={styles.heroImage} />
  </View>
);

export default HeroSection;