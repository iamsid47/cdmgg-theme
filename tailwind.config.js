module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary' : {
          
        },
        'secondary' : {

        },
        'cdmgg' : {

        }
      },
      width : {
        'cards' : {

        },
        'box' : {},
        'gen' : {}
      },
      height : {
        'h1' : {},
        'h2' : {},
        'h3' : {},
        'h4' : {},
        'h5' : {},
        'h6' : {},

      },
      borderRadius : {
        'b1' : {},
        'b2' : {},
        'b3' : {},
        'b4' : {},
      },
      boxShadow : {
        'shadow1' : {},
        'shadow2' : {},
        'shadow3' : {}

      },
      cursor : {

      },
      fontSize : {
        'p' : '0.875rem',
        'head' : '2.25rem',
        'subhead' : '1.5rem '

      },
      fontWeight : {
        'regular' : '400'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
