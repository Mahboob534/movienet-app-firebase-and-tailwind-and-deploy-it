/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "yekan-bakh": ["Yekan Bakh", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
