/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF804A',
        dark: '#010208',
        gray: '#CBCBCB'
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
}