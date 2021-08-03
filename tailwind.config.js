module.exports = {
  purge: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '130': '30rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
