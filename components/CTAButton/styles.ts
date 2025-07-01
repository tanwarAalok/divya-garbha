// components/CTAButton/styles.ts
import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme'; // Adjust path for theme

export const ctaButtonStyles = StyleSheet.create({
  getStarted: {
    backgroundColor: COLORS.primaryAction,
    paddingVertical: SPACING.medium * 1.5,
    paddingHorizontal: SPACING.extraLarge,
    borderRadius: BORDER_RADIUS.round,
    alignItems: 'center',
    marginVertical: SPACING.extraLarge,
    ...SHADOWS.large,
  },
  getStartedText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.h2,
    textAlign: 'center',
  },
  getStartedSubtitle: {
    color: COLORS.white,
    fontSize: FONT_SIZES.small,
    marginTop: SPACING.small / 2,
    opacity: 0.8,
    textAlign: 'center',
  },
});