// styles/onboardingStyles.ts
import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';

const { width, height } = Dimensions.get('window');

export const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.large,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: SPACING.extraLarge,
  },
  welcomeTitle: {
    fontSize: FONT_SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.primaryText,
    textAlign: 'center',
    marginBottom: SPACING.small,
  },
  welcomeSubtitle: {
    fontSize: FONT_SIZES.large,
    color: COLORS.softText,
    textAlign: 'center',
    marginBottom: SPACING.extraLarge,
    paddingHorizontal: SPACING.medium,
  },
  featureCard: { // Style for individual feature descriptions
    backgroundColor: COLORS.white,
    padding: SPACING.large,
    borderRadius: BORDER_RADIUS.medium,
    marginVertical: SPACING.small,
    width: '100%',
    ...SHADOWS.small,
  },
  featureTitle: {
    fontSize: FONT_SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.primaryText,
    marginBottom: SPACING.small / 2,
  },
  featureDescription: {
    fontSize: FONT_SIZES.small,
    color: COLORS.softText,
  },
  ctaButton: {
    backgroundColor: COLORS.primaryAction,
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.extraLarge,
    borderRadius: BORDER_RADIUS.round,
    marginVertical: SPACING.extraLarge,
    ...SHADOWS.large,
  },
  ctaButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.large,
  },
  loginLink: {
    padding: SPACING.small,
  },
  loginLinkText: {
    color: COLORS.primaryAction,
    fontSize: FONT_SIZES.medium,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});