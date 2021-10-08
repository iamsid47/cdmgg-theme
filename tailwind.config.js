// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    //I don't think defining custom border radius is of any use. PREFER DEFAULT VALUES.

    extend: {
      backgroundImage: {
        "compiler-pricing-cover":
          "url('/src/images/compiler-pricing-bkground.png')",
      },
      borderRadius: {
        Sm: "0.625rem",
        Lg: "1.875",
      },
      colors: {
        //this config does not contain regular colors and adjustments like - White color (#fff)
        //or flex, justify content, grids, etc.

        //primary
        pr: {
          deepBlack: "#111111",
          deepBlack222: "#222222",
          deepWhite: "#f5f5f5",
          offRed: "#EC3750",
        },
        //secondary
        sec: {
          paleYellow: "#FC8402",
          faintWhite: "#596197",
          runGreen: "#5CB85C",
          darkGrey: "#E5E5E5",
        },
      },

      fontSize: {
        p: "0.875rem",
        head: "2.25rem",
        head2: "3rem",
        subhead: "1.5rem ",
        menu: "0.75rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
