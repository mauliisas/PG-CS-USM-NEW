/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =withMT( {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins'],
      },
      colors: {
        'usm-primary-orange': '#EF772A',
        'usm-primary-purple': '#42276A',
        'usm-white': '#FFFFFF',
        'usm-black': '#000000',
      }
    },
  },
  plugins: [],
})
