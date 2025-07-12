/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: '#FFF8F0',
        primaryText: '#4E342E',
        secondaryText: '#795548',
        primaryAction: '#C6A784',
        accentHighlight: '#F5E6D3',
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