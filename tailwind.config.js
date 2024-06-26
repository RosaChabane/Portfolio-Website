/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alexandria: ['Alexandria', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: {
        navColor: 'rgba(244, 99, 174, 0.8)',
        cardColor: 'rgba(255, 233, 225, 1)',
      },
    },
  },
  plugins: [],
};