module.exports = {
  purge: ['./index.html', './src/**/*.vue', './src/**/*.js', './src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
