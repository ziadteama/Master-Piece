/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16758a",          // your existing primary
        black: "#000000",
        lightGray: "#eaeeef",
        white: "#ffffff",

        // Masterpiece brand additions
        'masterpiece-dark': '#1A1A1A',
        'masterpiece-light': '#F5F5F5',
        'masterpiece-gold': '#C9A64D',
        'masterpiece-gold-dark': '#A88738',
        'masterpiece-accent': '#4C5C68',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        chillax: ["Chillax", "sans-serif"],
      },
    },
  },
  plugins: [],
}
