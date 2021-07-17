module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'helper-yellow': '#FFC060',
        'helper-black': '#212121',
        'helper-gray': '#C8C7C7'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
