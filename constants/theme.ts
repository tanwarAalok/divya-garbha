// constants/theme.ts 

export const COLORS = {
  background: '#FFF8F0',
  primaryText: '#4E342E',
  secondaryText: '#795548',
  primaryAction: '#C6A784',
  accentHighlight: '#F5E6D3',
  white: '#FFFFFF',
  black: '#000000',
  lightGray: '#E0E0E0',
  mediumGray: '#BDBDBD',
  accentBackground: '#F0EAD6',
  courseBackground: '#A98467',
  lightOrange: '#FFF3E0',
  vibrantAccent: '#F4A261',
  error: '#D32F2F',
  success: '#388E3C',
};

export const SPACING = {
  tiny: 4,
  small: 8,
  medium: 12,
  large: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export const FONT_SIZES = {
  small: 14,
  medium: 16,
  large: 20,
  h3: 24,
  h2: 28,
  h1: 34,
};

export const BORDER_RADIUS = {
  small: 8,
  medium: 12,
  large: 16,
  round: 999,
};

export const SHADOWS = {
  small: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
};