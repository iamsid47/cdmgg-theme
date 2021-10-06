module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        //this config does not contain regular colors and adjustments like - White color (#fff)
        //or flex, justify content, grids, etc.
         //primary
        'pr' : {
          'deepBlack' : '#111111',
          'deepBlack222' : '#222222',
          'deepWhite' : '#f5f5f5',
          'offRed' : '#EC3750',
        },
         //secondary
        'sec' : {
          'paleYellow' : '#FC8402',
          'faintWhite' : '#596197',
          'runGreen' : '#5CB85C',
          'darkGrey' : '#E5E5E5'
        },
      },

      fontSize : {
        'p' : '0.875rem',
        'head' : '2.25rem',
        'head2' : '3rem',
        'subhead' : '1.5rem ',
        'menu' : '1rem'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
