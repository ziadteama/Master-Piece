/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16758a",
        black: "#000000",
        lightGray: "#eaeeef",
        white: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        chillax: ["Chillax", "sans-serif"],
      },
    },
  },
  plugins: [],
}
