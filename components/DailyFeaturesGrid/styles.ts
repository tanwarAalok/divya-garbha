// components/DailyFeaturesGrid/styles.ts
import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';

export const dailyFeaturesGridStyles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: SPACING.medium,
  },
  featureCard: {
    width: '30%', // Roughly 3 items per row, adjust for padding
    backgroundColor: COLORS.accentHighlight,
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    alignItems: 'center',
    marginBottom: SPACING.small,
    minHeight: 100, // Ensure consistent height
    justifyContent: 'center',
    ...SHADOWS.small,
  },
  featureIcon: {
    fontSize: 28, // Placeholder for icon size
    color: COLORS.primaryText,
    marginBottom: SPACING.small / 2,
  },
  featureText: {
    fontSize: FONT_SIZES.small,
    fontWeight: '600',
    color: COLORS.primaryText,
    textAlign: 'center',
  },
});