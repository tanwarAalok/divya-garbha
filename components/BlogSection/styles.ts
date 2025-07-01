// components/BlogSection/styles.ts
import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme'; // Adjust path

export const blogSectionStyles = StyleSheet.create({
  blogCard: {
    backgroundColor: COLORS.white,
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    marginBottom: SPACING.small,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primaryAction,
    ...SHADOWS.small,
  },
  blogTitle: {
    fontSize: FONT_SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.softText,
  },
  blogText: {
    fontSize: FONT_SIZES.small,
    color: COLORS.softText,
    marginTop: 4,
  },
  readMoreButton: {
    alignSelf: 'flex-end',
    marginTop: SPACING.small,
    paddingVertical: SPACING.small / 2,
    paddingHorizontal: SPACING.small,
  },
  readMoreText: {
    color: COLORS.primaryAction,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.small,
  },
  viewAllButton: {
    marginTop: SPACING.medium,
    paddingVertical: SPACING.medium,
    backgroundColor: COLORS.accentHighlight,
    borderRadius: BORDER_RADIUS.round,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.small,
  },
  viewAllButtonText: {
    color: COLORS.primaryText,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.medium,
  },
});