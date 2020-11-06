module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false, // Done through Gatsby
  theme: {
    extend: {
      colors: {
        devConceptsWhite: "#FFFFFF",
        devConceptsBlack: "#000000",
        devConceptsPink: {
          50: "#FEF3F9",
          100: "#FDE6F2",
          200: "#FAC1DF",
          300: "#F79BCC",
          400: "#F150A6",
          500: "#EB0580",
          600: "#D40573",
          700: "#8D034D",
          800: "#6A023A",
          900: "#470226",
        },
        devConceptsPurple: {
          50: "#F8F3FB",
          100: "#F1E7F6",
          200: "#DCC4E9",
          300: "#C7A0DB",
          400: "#9C58C1",
          500: "#7211A6",
          600: "#670F95",
          700: "#440A64",
          800: "#33084B",
          900: "#220532",
        },
        devConceptsGray: {
          100: "#FEFEFE",
          200: "#EFEFEF",
          300: "#D8D9DA",
          400: "#D9D9D9",
          500: "#B1B3B6",
          600: "#B3B5B8",
          700: "#8A8D91",
          800: "#63676D",
          900: "#686868",
          1000: "#3c4148",
        },
        devConceptsBlue: {
          100: "#C0CEDD",
          200: "#A0B4CA",
          300: "#7F9BB8",
          400: "#5E81A6",
          500: "#4A6887",
          600: "#384E66",
          700: "#263545",
          800: "#141C24",
          900: "#020303",
        },
        devConceptsOrange: {
          50: "#FEF9F3",
          100: "#FDF3E6",
          200: "#FBE0C1",
          300: "#F8CD9C",
          400: "#F2A851",
          500: "#ED8207",
          600: "#D57506",
          700: "#8E4E04",
          800: "#6B3B03",
          900: "#472702",
        },
        devConceptsRed: {
          50: "#FFF2F2",
          100: "#FEE6E6",
          200: "#FEC0C0",
          300: "#FD9999",
          400: "#FB4D4D",
          500: "#F90101",
          600: "#E00101",
          700: "#950101",
          800: "#700000",
          900: "#4B0000",
        },
      },
    },
    fontFamily: {
      devConcepts: [
        "Lato",
        "Source Sans Pro",
        "Kaushan Script",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    screens: {
      sm: { min: "600px" },
      md: { min: "960px" },
      lg: { min: "1280px" },
      xg: { min: "1600px" },
      xl: { min: "1920px" },
      print: { raw: "print" },
      portrait: { raw: "(orientation: portrait)" },
    },
  },
  variants: {},
  plugins: [
    /**
     * Reference: https://tailwindcss-custom-forms.netlify.app/
     */
    require("@tailwindcss/custom-forms"),
  ],
};
