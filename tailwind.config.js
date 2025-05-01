/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'pattern-mobile': "url('/assets/images/pattern-background-mobile.svg')",
      },
    },
  },
  plugins: [],
}
