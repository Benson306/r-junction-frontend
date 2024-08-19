/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#125570',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
      
  },
  plugins: [],
}