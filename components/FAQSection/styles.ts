// components/FAQSection/styles.ts
import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme'; // Adjust path for theme

export const faqSectionStyles = StyleSheet.create({
  faqCard: {
    backgroundColor: COLORS.white,
    padding: SPACING.small,
    borderRadius: BORDER_RADIUS.medium,
    marginBottom: SPACING.small,
    ...SHADOWS.small,
  },
  faqToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQ: {
    fontWeight: 'bold',
    color: COLORS.primaryText,
    flex: 1,
    fontSize: FONT_SIZES.medium,
  },
  faqIcon: {
    fontSize: FONT_SIZES.large,
    color: COLORS.primaryText,
    marginLeft: SPACING.small,
    fontWeight: 'bold',
  },
  faqA: {
    color: COLORS.softText,
    marginTop: SPACING.small,
    lineHeight: 22,
    fontSize: FONT_SIZES.small,
  },
});