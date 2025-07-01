// components/DashboardFooter/styles.ts
import { StyleSheet, Dimensions } from 'react-native';
import { BORDER_RADIUS, COLORS, FONT_SIZES, SPACING } from '../../constants/theme';

const { width } = Dimensions.get('window');

export const dashboardFooterStyles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.white, // White footer for contrast
    borderTopLeftRadius: BORDER_RADIUS.medium, // Rounded top corners
    borderTopRightRadius: BORDER_RADIUS.medium,
    paddingVertical: SPACING.medium,
    position: 'absolute', // Stick to bottom
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -2 }, // Shadow at the top
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 8, // For Android
  },
  navItem: {
    flex: 1, // Distribute space evenly
    alignItems: 'center',
    paddingVertical: SPACING.small,
  },
  navIcon: {
    fontSize: 24, // Placeholder for icon size
    color: COLORS.softText,
    marginBottom: SPACING.small / 2,
  },
  navText: {
    fontSize: FONT_SIZES.small,
    color: COLORS.softText,
    fontWeight: '500',
  },
  navItemActive: { // Style for active tab (optional)
    // Add active state styling here if you implement it (e.g., different color)
  },
  navTextActive: { // Style for active tab text (optional)
    color: COLORS.primaryAction,
    fontWeight: 'bold',
  },
});