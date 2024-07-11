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
        navColor: 'rgba(233, 147, 191, 1)',
        coralTheme: 'rgb(238, 116, 129, 1)',
        textTheme: 'rgba(106, 0, 108, 1)',
        cardColor: 'rgba(255, 233, 225, 1)',
      },
    },
  },
  plugins: [],
};