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
          100: "#ed82bf",
          200: "#e30f89",
          300: "#e5007d",
          400: "#aa0966",
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
          100: "#496686",
          200: "#31475F",
          300: "#203041",
          400: "#213142",
          500: "#1C2B3B",
          600: "#151C24",
        },
        devConceptsRed: {
          100: "#f8b7bd",
          200: "#e57373",
        },
      },
    },
    fontFamily: {
      devConcepts: [
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
  plugins: [],
}
