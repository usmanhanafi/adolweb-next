const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: '#0A79FF',
        lighten: '#4E9EFF',
        darken: '#1870DA',
      },
      secondary: {
        DEFAULT: '#54D4FD',
        lighten: '#95E5FF',
        darken: '#1ABDF1',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
