/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0B0B',
        secondary: '#1A1A1A',
        accent: '#FFD600',
        textLight: '#BFBFBF',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        heading: ['"Bebas Neue"', 'sans-serif'],
        cta: ['"Poppins"', 'sans-serif'],
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        zoomIn: 'zoomIn 8s ease-in-out infinite alternate',
        fadeUp: 'fadeUp 0.8s ease forwards',
      },
    },
  },
  plugins: [],
}