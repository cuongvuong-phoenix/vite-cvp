const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        gray: colors.gray,
      },

      typography: (theme) => ({
        // Customized from: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
        DEFAULT: {
          css: {
            'ul > li::before': {
              backgroundColor: theme('colors.gray.500'),
            },

            // Avoid overridding Prism's theme.
            'code': false,
            'code::before': false,
            'code::after': false,
            'a code': false,
            'pre code': false,
            'pre': {
              color: false,
              backgroundColor: false,
              fontSize: false,
            },
          },
        },
        light: {
          css: {
            'color': theme('colors.gray.300'),
            '[class~="lead"]': {
              color: theme('colors.gray.400'),
            },
            'a, strong, h1, h2, h3, h4, thead': {
              color: theme('colors.gray.200'),
            },
            'ol > li::before, figure figcaption': {
              color: theme('colors.gray.400'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.400'),
            },
            'blockquote': {
              color: theme('colors.gray.400'),
              borderLeftColor: theme('colors.gray.700'),
            },
            'thead': {
              borderBottomColor: theme('colors.gray.600'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },

    // typography: {
    //   css: {
    //     code: {
    //       color: false,
    //     }
    //   }
    // }
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
