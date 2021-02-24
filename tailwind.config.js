const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        trueGray: colors.trueGray,
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
            'pre code': false,
            // Inline-code without Prism's `class="language"` attribute,
            // based on Prism `one-light-dark` theme (https://github.com/kenchandev/prism-theme-one-light-dark).
            // ':not(pre) > code:not([class*="language-"])': {
            //   backgroundColor: theme('colors.gray.200'),
            //   borderRadius: '0.25em',
            //   padding: '0.1em 0.3em',
            //   lineHeight: '1.4em',
            // },
          },
        },
        light: {
          css: {
            'color': theme('colors.gray.200'),
            '[class~="lead"]': {
              color: theme('colors.gray.300'),
            },
            'a, strong, h1, h2, h3, h4, thead': {
              color: theme('colors.white'),
            },
            'ol > li::before, figure figcaption': {
              color: theme('colors.gray.400'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.400'),
            },
            'blockquote': {
              color: theme('colors.gray.300'),
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
