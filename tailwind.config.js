/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*","./html/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
      },
      fontWeight: {
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
        '800': 800,
        '900': 900,
      },
    },
  },
  plugins: [],
}