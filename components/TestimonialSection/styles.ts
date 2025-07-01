// components/TestimonialSection/styles.ts
import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme'; // Adjust path for theme

const { width } = Dimensions.get('window');

export const testimonialSectionStyles = StyleSheet.create({
  testimonialSlider: {
    marginVertical: SPACING.medium,
  },
  testimonialCard: {
    backgroundColor: COLORS.lightOrange,
    padding: SPACING.large,
    borderRadius: BORDER_RADIUS.medium,
    width: width - (SPACING.large * 2),
    marginRight: SPACING.medium,
    ...SHADOWS.medium,
    justifyContent: 'space-between',
    minHeight: 200,
  },
  testimonialQuote: {
    fontSize: 24,
    color: COLORS.vibrantAccent,
    marginBottom: SPACING.small,
  },
  testimonialText: {
    fontStyle: 'italic',
    color: COLORS.softText,
    fontSize: FONT_SIZES.medium,
    lineHeight: FONT_SIZES.large,
    flexGrow: 1,
  },
  testimonialAuthor: {
    textAlign: 'right',
    fontWeight: '600',
    color: COLORS.softText,
    marginTop: SPACING.small,
    fontSize: FONT_SIZES.medium,
  },
});