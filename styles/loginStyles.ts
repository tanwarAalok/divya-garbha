// styles/loginStyles.ts
import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';

export const loginStyles = StyleSheet.create({
  safeArea: { // This replaces the old 'container' for the SafeAreaView
    flex: 1,
    backgroundColor: COLORS.background,
    // NO PADDING HERE. Let SafeAreaView handle the insets.
  },
  contentContainer: { // NEW: This will hold your main content and apply padding
    flex: 1, // Allow content to take available space within safe area
    justifyContent: 'center', // Keep content centered vertically
    padding: SPACING.large, // Apply your desired padding here
  },
  headerText: {
    fontSize: FONT_SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.primaryText,
    textAlign: 'center',
    marginBottom: SPACING.extraLarge,
  },
  input: {
    backgroundColor: COLORS.white,
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    marginBottom: SPACING.medium,
    fontSize: FONT_SIZES.medium,
    color: COLORS.primaryText,
    borderWidth: 1,
    borderColor: COLORS.lightGray, // Use lightGray for input borders
    ...SHADOWS.small,
  },
  loginButton: {
    backgroundColor: COLORS.primaryAction,
    paddingVertical: SPACING.medium,
    borderRadius: BORDER_RADIUS.round,
    alignItems: 'center',
    marginVertical: SPACING.large,
    ...SHADOWS.large,
  },
  loginButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.large,
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: SPACING.medium,
  },
  linkText: {
    color: COLORS.primaryAction,
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginBottom: SPACING.small,
  },
});