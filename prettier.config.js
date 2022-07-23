module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  quoteProps: 'consistent',
  trailingComma: 'es5',
  vueIndentScriptAndStyle: true,

  overrides: [
    {
      files: '*.yaml',
      options: {
        singleQuote: false,
      },
    },
  ],
};
