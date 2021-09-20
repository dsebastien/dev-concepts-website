'use strict';

const { spacing } = require('tailwindcss/defaultTheme');
const mdx = require('@mdx-js/mdx');

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './apps/**/*.{html,mdx,tsx,ts,jsx,js,scss}',
      './libs/**/*.{html,mdx,tsx,ts,jsx,js,scss}',
    ],
    // PurgeCSS options
    // Reference: https://purgecss.com/
    options: {
      rejected: true,
      printRejected: true,
      safelist: ['html', 'body', 'dark'],
      extractors: [
        {
          extensions: ['mdx'],
          extractor: (content) => {
            content = mdx.sync(content);

            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches =
              content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) ||
              [];

            return broadMatches.concat(innerMatches);
          },
        },
      ],
    },
  },
  /**
   * Enable dark mode
   */
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        devConcepts: [
          "Lato",
          "Source Sans Pro",
          'AvenirNext',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      screens: {
        sm: { min: '600px' },
        md: { min: '960px' },
        lg: { min: '1280px' },
        xg: { min: '1600px' },
        xl: { min: '1920px' },
        xxl: { min: "2440px" },
        print: { raw: 'print' },
        portrait: { raw: '(orientation: portrait)' },
      },
      colors: {
        devConceptsWhite: "#FFFFFF",
        devConceptsBlack: "#000000",
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
        devConceptsPink: {
          50: "#FEF3F9",
          100: "#FDE6F2",
          200: "#FAC1DF",
          300: "#F79BCC",
          400: "#F150A6",
          450: "#EB34E8",
          500: "#EB0580",
          600: "#D40573",
          700: "#8D034D",
          800: "#6A023A",
          900: "#470226",
        },
        devConceptsCerise: {
          50: "#ffd6ff",
          100: "#ffaeff",
          200: "#e794e7",
          300: "#cd7cce",
          400: "#b364b4",
          500: "#9a4d9c",
          600: "#823684",
          700: "#6a1f6d",
          800: "#520157",
          900: "#330039",
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
        devConceptsIndigo: {
          100: "#FFFFFF",
          200: "#EDF0FD",
          300: "#C0CAF6",
          400: "#93A4F0",
          500: "#667FEA",
          600: "#3A59E4",
          700: "#1C3DCE",
          800: "#1630A2",
          900: "#102275",
        },
        devConceptsGreen: {
          100: "#DDF3E6",
          200: "#B8E5CB",
          300: "#93D7AF",
          400: "#6EC994",
          500: "#49BC78",
          600: "#389961",
          700: "#2B7349",
          800: "#1D4E31",
          900: "#0F291A",
        },
        devConceptsTeal: {
          100: "#C9EEEC",
          200: "#A2E2DE",
          300: "#7BD5D1",
          400: "#54C9C3",
          500: "#38B2AC",
          600: "#2C8C87",
          700: "#206561",
          800: "#143E3C",
          900: "#071716",
        },
        devConceptsOrange: {
          50: "#FEF9F3",
          100: "#FDF3E6",
          200: "#FBE0C1",
          300: "#F8CD9C",
          400: "#F2A851",
          500: "#ED8207",
          550: "#F76b00",
          600: "#D57506",
          700: "#8E4E04",
          800: "#6B3B03",
          900: "#472702",
        },
        devConceptsYellow: {
          100: "#FFFFFF",
          200: "#FBF3D5",
          300: "#F6E5A7",
          400: "#F1D779",
          500: "#ECC94B",
          600: "#E7BB1D",
          700: "#BD9914",
          800: "#8F730F",
          900: "#614E0A",
        },
        devConceptsAmber: {
          50: "#fadcb4",
          100: "#f7bc7d",
          200: "#f6994d",
          300: "#f56f22",
          400: "#ec4000",
          500: "#cf2100",
          600: "#ad0000",
          700: "#850000",
          800: "#600000",
          900: "#500000",
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
          900: "#4b0000",
        },
        gray: {
          DEFAULT: '#9AA1A6',
          50: '#FEFEFE',
          100: '#FAFAFA',
          200: '#EBEDEE',
          300: '#D0D3D6',
          400: '#B5BABE',
          500: '#9AA1A6',
          600: '#7F888E',
          700: '#666E74',
          800: '#4E5459',
          900: '#363B3E',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.devConceptsGray.900'),
            a: {
              color: theme('colors.devConceptsBlue.500'),
              '&:hover': {
                color: theme('colors.devConceptsBlue.300'),
              },
              '&:visited': {
                color: theme('colors.devConceptsBlue.500'),
              },
              '&:visited:hover': {
                color: theme('colors.devConceptsBlue.300'),
              },
              code: { color: theme('colors.devConceptsBlue.200') },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            code: { color: theme('colors.devConceptsPink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.devConceptsGray.400'),
            a: {
              color: theme('colors.devConceptsBlue.300'),
              '&:hover': {
                color: theme('colors.devConceptsBlue.100'),
              },
              '&:visited': {
                color: theme('colors.devConceptsBlue.300'),
              },
              '&:visited:hover': {
                color: theme('colors.devConceptsBlue.100'),
              },
              code: { color: theme('colors.devConceptsBlue.300') },
            },
            blockquote: {
              borderLeftColor: theme('colors.devConceptsGray.400'),
              color: theme('colors.devConceptsGray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.devConceptsGray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.devConceptsGray.200') },
            strong: { color: theme('colors.devConceptsGray.300') },
            thead: {
              color: theme('colors.devConceptsGray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.devConceptsGray.700'),
              },
            },
          },
        },
      }),
      boxShadow: {
        'el-xs': '1.3px 2.6px 2.6px hsl(0deg 0% 0% / 0.46)',
        'el-sm': '2.0px 4.0px 4.0px hsl(0deg 0% 0% / 0.44)',
        'el-md': '3.0px 6.1px 6.1px hsl(0deg 0% 0% / 0.41)',
        'el-lg': '4.5px 9.0px 9.0px hsl(0deg 0% 0% / 0.36)',
        'el-xl': '6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29)',
        'el-2xl': '8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25)',
      },
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    /**
     * Reference: https://tailwindcss-custom-forms.netlify.app/
     */
    require("@tailwindcss/custom-forms"),
    /**
     * Typography
     */
    require('@tailwindcss/typography')
  ],
};
