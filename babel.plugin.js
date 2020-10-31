module.exports = {
  /**
   * Allows to integrate Tailwind and styled-components
   * Reference: https://www.freecodecamp.org/news/how-to-style-your-react-apps-with-less-code-using-tailwind-css-and-styled-components/
   */
  tailwind: {
    plugins: ["macros"],
    config: "./src/tailwind.config.js",
    format: "auto",
  },
}
