// components/CourseCarousel/styles.ts
import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme'; // Adjust path for theme

const { width } = Dimensions.get('window');

export const courseCarouselStyles = StyleSheet.create({
  courseSlider: {
    marginVertical: SPACING.medium,
  },
  courseCardFull: {
    backgroundColor: COLORS.courseBackground,
    padding: SPACING.small,
    borderRadius: BORDER_RADIUS.medium,
    width: width - (SPACING.large * 2), // Full width minus container padding
    marginRight: SPACING.medium,
    ...SHADOWS.medium,
  },
  courseImage: {
    height: 180,
    width: '100%',
    borderRadius: BORDER_RADIUS.small,
    marginBottom: SPACING.small,
    resizeMode: 'cover',
  },
  courseTitle: {
    color: COLORS.white,
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
    marginBottom: SPACING.small / 2,
  },
  courseDescription: {
    color: COLORS.white,
    fontSize: FONT_SIZES.small,
    lineHeight: FONT_SIZES.medium,
    marginBottom: SPACING.small,
  },
  enrollButton: {
    marginTop: 'auto',
    backgroundColor: COLORS.primaryAction,
    borderRadius: BORDER_RADIUS.round,
    paddingVertical: SPACING.small,
    alignItems: 'center',
  },
  enrollText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: FONT_SIZES.medium,
  },
});