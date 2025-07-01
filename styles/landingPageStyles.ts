// styles/landingPageStyles.ts
import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';

const { width } = Dimensions.get('window');

export const landingPageStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background, // Applies background to fill screen
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures content can grow and scroll
    paddingBottom: SPACING.xxxl, // Generous padding at the bottom for aesthetic
  },
  container: { // Removed this style as safeArea and scrollViewContent now manage full screen and scroll
    //flex: 1,
    //backgroundColor: COLORS.background,
  },

  // Hero Section (ensure these styles are consistent with your HeroSection component)
  // Example if HeroSection were inline, but it's a component.
  // heroContainer: { ... },
  // heroImage: { ... },
  // heroTitle: { ... },
  // heroSubtitle: { ... },

  // NEW: Primary Action Buttons Container
  authButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: SPACING.large,
    paddingVertical: SPACING.medium,
    marginBottom: SPACING.extraLarge, // Space after buttons
    marginTop: SPACING.large, // Space above buttons from Hero
  },
  getStartedButton: {
    backgroundColor: COLORS.primaryAction,
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.large,
    borderRadius: BORDER_RADIUS.round,
    ...SHADOWS.medium,
    minWidth: width * 0.4, // Responsive width
    alignItems: 'center',
  },
  getStartedButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: COLORS.accentBackground, // Defined in COLORS now
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.large,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 1,
    borderColor: COLORS.primaryAction, // Outline effect
    minWidth: width * 0.4, // Responsive width
    alignItems: 'center',
  },
  loginButtonText: {
    color: COLORS.primaryAction,
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
  },

  // Existing sections might benefit from consistent padding
  sectionPadding: {
    paddingHorizontal: SPACING.large,
    marginBottom: SPACING.extraLarge,
  },

  // Example: Apply sectionPadding to individual component containers if they don't have it already
  // optionsGridContainer: {
  //   ...this.sectionPadding,
  // },
  // blogSectionContainer: {
  //   ...this.sectionPadding,
  // },
  // etc.
});