// components/OptionsGrid/styles.ts
import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme'; // Adjust path

export const optionsGridStyles = StyleSheet.create({
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: SPACING.medium,
  },
  card: {
    width: '30%',
    backgroundColor: COLORS.accentHighlight,
    marginBottom: SPACING.small,
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
    ...SHADOWS.small,
  },
  cardText: {
    fontWeight: '600',
    color: COLORS.primaryText,
    textAlign: 'center',
    fontSize: FONT_SIZES.medium,
  },
});