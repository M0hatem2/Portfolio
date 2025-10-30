/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A4031',
          50: '#ECEDEB',
          100: '#DADBD5',
          200: '#B8B5A2',
          300: '#8F917A',
          400: '#70795C',
          500: '#3A4031', // اللون الأساسي
          600: '#30362A',
          700: '#262C22',
          800: '#1C221A',
          900: '#121712',
        },
        secondary: '#60694F',
        accent: '#8F917A',
        neutral: '#B8B5A2',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
