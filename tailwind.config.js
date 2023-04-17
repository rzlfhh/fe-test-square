/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#fff',
      'black': '#000000',
      'black-2': '#110D17',
      'secondary': '#98949E',
      'secondary-2': '#D1D0D3',
      'secondary-3': '#FAFAFA',
      'secondary-4': '#6D6D6D',
      'primary': '#5D5FEF',
      'orange': '#F17300',
      'red': '#8F0A13',
      'red-soft': '#FEF5F6',
    },
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'],
      'satoshi': ['Satoshi', 'sans-serif'],
    }
  },
  plugins: [],
}

