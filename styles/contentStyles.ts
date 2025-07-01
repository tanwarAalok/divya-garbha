import { BORDER_RADIUS, COLORS, FONT_SIZES, SHADOWS, SPACING } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export const contentStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    padding: SPACING.large,
  },
  trimesterSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: SPACING.large,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.round,
    padding: SPACING.small,
    ...SHADOWS.small, // Apply shadow from theme
  },
  trimesterButton: {
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.large,
    borderRadius: BORDER_RADIUS.round,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: SPACING.tiny,
  },
  trimesterButtonActive: {
    backgroundColor: COLORS.primaryAction,
  },
  trimesterButtonText: {
    color: COLORS.secondaryText,
    fontWeight: '600',
    fontSize: FONT_SIZES.medium,
  },
  trimesterButtonTextActive: {
    color: COLORS.white,
  },
  contentCard: {
    backgroundColor: COLORS.white,
    padding: SPACING.large,
    borderRadius: BORDER_RADIUS.medium,
    marginBottom: SPACING.large,
    ...SHADOWS.medium, // Apply shadow from theme
  },
  contentTitle: {
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
    color: COLORS.primaryText,
    marginBottom: SPACING.small,
  },
  contentDescription: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.secondaryText,
    marginBottom: SPACING.medium,
    lineHeight: FONT_SIZES.large,
  },
  contentImage: {
    width: '100%',
    height: 200,
    borderRadius: BORDER_RADIUS.small,
    marginBottom: SPACING.medium,
    resizeMode: 'cover',
  },
  videoButton: {
    backgroundColor: COLORS.vibrantAccent,
    paddingVertical: SPACING.medium,
    borderRadius: BORDER_RADIUS.medium,
    alignItems: 'center',
    marginTop: SPACING.small,
  },
  videoButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.medium,
  },
  detailsContainer: {
    marginTop: SPACING.small,
    paddingLeft: SPACING.medium,
  },
  detailText: {
    fontSize: FONT_SIZES.small,
    color: COLORS.secondaryText,
    marginBottom: SPACING.tiny,
  },
  noContentText: {
    textAlign: 'center',
    fontSize: FONT_SIZES.large,
    color: COLORS.secondaryText,
    marginTop: SPACING.xxl,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: SPACING.large,
  },
  errorText: {
    fontSize: FONT_SIZES.h2,
    color: COLORS.error,
    textAlign: 'center',
    marginBottom: SPACING.large,
  },
  backButton: {
    backgroundColor: COLORS.primaryAction,
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.extraLarge,
    borderRadius: BORDER_RADIUS.round,
    marginTop: SPACING.medium,
  },
  backButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.large,
  },
});
