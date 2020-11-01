module.exports = () => ({
  plugins: [
    // Support imports
    require('postcss-import'),

    // Tailwind
    require('tailwindcss')('./tailwind.config.js'),

    // PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
    // Write your CSS rules without vendor prefixes (in fact, forget about them entirely). Autoprefixer will use the data based on current browser popularity and property support to apply prefixes for you.
    require("autoprefixer"),
  ],
});
