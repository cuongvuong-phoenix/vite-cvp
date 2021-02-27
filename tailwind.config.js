const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      // From `vite-plugin-md`.
      safelist: ['dark', 'prose', 'dark:prose-light', 'mx-auto'],
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        gray: colors.gray,
      },

      // Customize from official styles
      // (https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js)
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'ul > li::before': {
              backgroundColor: theme('colors.gray.500'),
            },

            'a': {
              'color': theme('colors.amber.600'),
              'fontStyle': 'italic',
              'textDecoration': 'none',
              'textUnderlinePosition': 'from-font',
              '&:hover, &:focus': {
                color: theme('colors.amber.500'),
                textDecoration: 'underline',
              },
            },

            // Avoid overriding Prism's theme.
            'code': false,
            'code::before': false,
            'code::after': false,
            'a code': false,
            'pre code': false,
            'pre': {
              color: false,
              backgroundColor: false,
              fontSize: false,
              borderRadius: false,
            },
          },
        },
        light: {
          css: {
            'color': theme('colors.gray.300'),
            '[class~="lead"]': {
              color: theme('colors.gray.400'),
            },
            'strong, h1, h2, h3, h4, thead': {
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
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
