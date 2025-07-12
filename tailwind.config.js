/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: '#FFF9F0',
        primaryText: '#3E2723',
        secondaryText: '#6D4C41',
        primaryAction: '#D4A373',
        accentHighlight: '#F7C59F',
        accentBackground: '#F0EAD6',
        courseBackground: '#A98467',
        lightOrange: '#FFF3E0',
        vibrantAccent: '#F4A261',
        error: '#D32F2F',
        success: '#388E3C',
      },
    },
  },
  plugins: [],
}