module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '540px',
      },
      colors: {
        primary: '#911a11',
        'primary-contrast': '#EED',
        background: '#ccc',
      },
      fontFamily: {
        body: ['DM sans', 'sans-serif'],
        hanzi: ['Kaiti', 'Noto Serif SC', 'sans-serif'],
        hanziClassic: ['Noto Serif SC', 'sans-serif'],
      },
      fontSize: {
        '10xl': '12rem',
        '11xl': '16rem',
      },
    },
  },
  plugins: [],
};
