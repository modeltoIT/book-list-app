/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '330px',
      },
      colors: {
        'gray-150': '#edeef1',
      }
    },
  },
  plugins: [],
};

