// constants/theme.ts (corrected and updated COLORS)

export const COLORS = {
  // Primary Palette
  background: '#FFF9F0',      // A soft, creamy off-white for general backgrounds
  primaryText: '#3E2723',     // Dark brown, strong and readable for main text
  secondaryText: '#6D4C41',   // Softer brown, good for subtitles, descriptions (formerly softText)
  primaryAction: '#D4A373',   // Warm, earthy orange-brown for main buttons and highlights
  accentHighlight: '#F7C59F', // Lighter, peachy tone for subtle accents, highlights

  // Secondary/Supportive Colors
  white: '#FFFFFF',           // Pure white
  black: '#000000',           // Pure black
  lightGray: '#E0E0E0',       // Light gray for borders, separators
  mediumGray: '#B0B0B0',      // A slightly darker gray for secondary outlines or disabled states

  // NEWLY ADDED/CORRECTED FOR BUTTONS
  accentBackground: '#F0EAD6', // A very light, warm beige/off-white for secondary button backgrounds
                               // This will provide a good contrast with primaryAction as its border.

  // Specific Use Cases
  courseBackground: '#A98467', // A muted, earthy green-brown, great for course cards/sections
  lightOrange: '#FFF3E0',     // Very light orange, ideal for subtle backgrounds like testimonial cards
  vibrantAccent: '#F4A261',   // A more vibrant orange, perfect for quotes or urgent CTAs
  error: '#D32F2F',           // Standard red for error messages or alerts
  success: '#388E3C',         // Standard green for success messages
};

// You'd also have your SPACING, FONT_SIZES, BORDER_RADIUS, SHADOWS here
export const SPACING = {
  tiny: 4,
  small: 8,
  medium: 12,
  large: 16,
  extraLarge: 24,
  xxl: 32,
  xxxl: 48,
};

export const FONT_SIZES = {
  small: 12,
  medium: 16,
  large: 20,
  h3: 24,
  h2: 28,
  h1: 32,
};

export const BORDER_RADIUS = {
  small: 4,
  medium: 8,
  large: 12,
  round: 50, // For fully rounded buttons/avatars
};

export const SHADOWS = {
  small: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  medium: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  large: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
};