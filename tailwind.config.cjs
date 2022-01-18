// tailwind.config.js
module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./build/**/*.html', './src/**/*.svelte'],
    options: {
      defaultExtractor: content => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
      '2xl': '2000px',
    },
    extend: {
      gridTemplateColumns: {
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 0.25fr))',
        '4': 'repeat(4, minmax(0, 0.25fr))',
        '5': 'repeat(5, minmax(0, 0.25fr))',
        '6': 'repeat(6, minmax(0, 0.25fr))',
        '7': 'repeat(7, minmax(0, 0.25fr))',
        '8': 'repeat(8, minmax(0, 0.25fr))',
        '9': 'repeat(9, minmax(0, 0.25fr))',
        '10': 'repeat(10, minmax(0, 0.25fr))',
        '11': 'repeat(11, minmax(0, 0.25fr))',
        '12': 'repeat(12, minmax(0, 0.25fr))',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'), //safari doesn't support the css aspect-ratio parameter...
  ],
}