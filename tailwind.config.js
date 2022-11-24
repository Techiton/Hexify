/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NavBarFont: ['Noto Serif Khojki', "serif"]
      }
    },
  },
  plugins: [],
}
