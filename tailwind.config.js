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
        textTheme: 'rgba(89, 5, 90, 1)',
        coralTheme: 'rgb(238, 116, 129, 1)',
        navColor: 'rgb(132, 112, 185)',
        buttonTheme: 'rgba(137, 81, 89, 1)',
        cardColor: 'rgba(255, 233, 225, 1)',
        navyTheme: 'rgba(55, 67, 117, 1)',
      },
    },
  },
  plugins: [],
};
