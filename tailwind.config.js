/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '530px',
      md: '700px',
      lg: '900px',
      xl: '1300px',
    },

    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        orangec: '#e9560d',
        orangec_light: '#f3e383',
      },
    },
  },
  plugins: [],
};
