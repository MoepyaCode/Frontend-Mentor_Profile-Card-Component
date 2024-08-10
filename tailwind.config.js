/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      backgroundImage: {
        'victor': 'url("/images/challenge/image-victor.jpg")',
        'pattern-top': 'url("/images/challenge/bg-pattern-top.svg")',
        'pattern-bottom': 'url("/images/challenge/bg-pattern-bottom.svg")',
      }
    },
  },
  plugins: [],
}