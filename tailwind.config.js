/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '0',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#884ab2',
          2: '#c471ed',
        },
        secondary: '#f64f59',
        gray: {
          1: '#f8fafd',
          2: '#f3f6fc',
        },
      },

      fontFamily: {
        primary: 'IranSans',
      },
    },
  },
  plugins: [],
};
