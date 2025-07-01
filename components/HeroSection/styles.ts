// components/HeroSection/styles.ts
import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONT_SIZES, SPACING } from '../../constants/theme'; // Adjust path for theme import

const { width } = Dimensions.get('window');

export const heroSectionStyles = StyleSheet.create({
  hero: {
    alignItems: 'center',
    marginBottom: SPACING.large,
  },
  title: {
    fontSize: FONT_SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.primaryText,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.softText,
    textAlign: 'center',
    marginVertical: SPACING.medium,
  },
  heroImage: {
    marginVertical: SPACING.large,
    width: width * 0.9,
    height: 300,
    resizeMode: 'contain',
  },
});