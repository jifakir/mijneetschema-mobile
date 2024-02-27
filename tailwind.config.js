/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F35756',
        'black-light': '#1C1C1E',
      },
      fontFamily: {
        integral: ['Integral'],
        'integral-bold': ['Integral-Bold'],
        open: ['OpenSans_400Regular'],
        'open-medium': ['OpenSans_500Medium'],
        'open-semibold': ['OpenSans_600SemiBold'],
        'open-bold': ['OpenSans_700Bold'],
      },
    },
  },
  plugins: [],
};
