/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/newsletters/**/*.mdx'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
