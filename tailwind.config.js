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
      width: {
        '1/10': '10%',
        '1/5': '20%',
        '1/4': '25%',
        '1/3': '33.333333%',
        '1/2': '50%',
        '2/3': '66.666667%',
        '3/4': '75%',
        '4/5': '80%',
        '9/10': '90%',
      },
    },
  },
  plugins: [],
};
