// components/ConsultationFlyer/styles.ts
import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';

export const consultationFlyerStyles = StyleSheet.create({
  flyerCard: {
    backgroundColor: COLORS.courseBackground, // Reusing a warm color
    padding: SPACING.large,
    borderRadius: BORDER_RADIUS.medium,
    marginVertical: SPACING.large,
    alignItems: 'center',
    ...SHADOWS.large,
  },
  flyerTitle: {
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: SPACING.small,
  },
  flyerDescription: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: SPACING.medium,
    opacity: 0.9,
  },
  ctaButton: {
    backgroundColor: COLORS.primaryAction,
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.extraLarge,
    borderRadius: BORDER_RADIUS.round,
    ...SHADOWS.medium, // Subtler shadow for inner button
  },
  ctaButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.large,
  },
});