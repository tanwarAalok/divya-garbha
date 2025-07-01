// components/DashboardHeader/styles.ts
import { StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZES } from '../../constants/theme'; // Make sure FONT_SIZES is imported

export const dashboardHeaderStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distributes space between logo/title group and profile
    alignItems: 'center',
    paddingHorizontal: SPACING.large,
    paddingVertical: SPACING.medium,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  logoTitleContainer: { // NEW: Container for logo and title
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Allow this container to take up available space
  },
  appLogo: {
    width: 35, // Adjusted size for logo next to text
    height: 35,
    resizeMode: 'contain',
    marginRight: SPACING.small, // Space between logo and title
  },
  headerTitle: { // NEW: Style for the header title
    fontSize: FONT_SIZES.large, // Or FONT_SIZES.h3, adjust as needed
    fontWeight: 'bold',
    color: COLORS.primaryText,
    flexShrink: 1, // Allow title to shrink if space is constrained
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.lightOrange,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: SPACING.medium, // Space between title/logo and profile
  },
  profileText: {
    color: COLORS.primaryText,
    fontSize: 18,
    fontWeight: 'bold',
  }
});