/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'din-next': ['DIN Next', 'Arial', 'sans-serif'],
      },
      colors: {
        // MetaPhase EDG brand colors (from Wix site CSS)
        'mp-navy': '#1B2A4A',
        'mp-dark-navy': '#0C1B2A',
        'mp-blue': '#2B5EA7',
        'mp-light-blue': '#4A90D9',
        'mp-accent': '#E8A838',
        'mp-gold': '#D4A843',
        'mp-white': '#FFFFFF',
        'mp-light-gray': '#F5F5F5',
        'mp-mid-gray': '#8B8B8B',
        'mp-dark-gray': '#333333',
        'mp-text': '#2D2D2D',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
