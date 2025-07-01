// styles/loginStyles.ts
import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    padding: SPACING.large,
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
    borderColor: COLORS.softText,
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