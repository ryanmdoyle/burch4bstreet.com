module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sofiaGreen: '#2DBFB0',
        sofiaGreenDark: '#479E94',
      },
      fontFamily: {
        display: ['"Averia Serif Libre"'],
        subdisplay: ['Roboto'],
        // body: ['"Open Sans"'],
        body: ['Roboto'],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
