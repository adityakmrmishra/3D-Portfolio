/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#d0d0d0",
        tertiary: "#565656",
        "black-100": "#181818",   // slightly lighter than primary
        "black-200": "#232323",   // between primary and tertiary
        "white-100": "#e6e6e6",   // slightly darker than secondary
      },
      boxShadow: {
        card: "0px 35px 120px -15px #565656",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    }
  },
  plugins: [],
};