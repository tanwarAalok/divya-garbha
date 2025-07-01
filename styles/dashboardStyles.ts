// styles/dashboardStyles.ts
import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';

const { width } = Dimensions.get('window');

export const dashboardStyles = StyleSheet.create({
  container: {
    flexGrow: 1, // Allow content to grow, crucial for ScrollView
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.large,
    paddingBottom: SPACING.extraLarge * 2, // Add padding for footer
  },
  sectionTitle: { // Reusable section title style for the dashboard
    fontSize: FONT_SIZES.h2,
    fontWeight: '600',
    color: COLORS.primaryText,
    marginVertical: SPACING.large,
    marginTop: SPACING.large + 10, // Slightly more space above sections
  },
  welcomeContainer: {
    backgroundColor: COLORS.lightOrange,
    padding: SPACING.large,
    borderRadius: BORDER_RADIUS.medium,
    marginVertical: SPACING.large,
    ...SHADOWS.medium,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
    color: COLORS.primaryText,
    marginBottom: SPACING.small,
  },
  quoteText: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.softText,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: FONT_SIZES.large,
  },
});