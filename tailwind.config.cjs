/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "jsf-blue": "#1b536c",
        "jsf-button": "#1b436c",
        "black-100": "#111",
        "black-200": "#1d1d1d",
        "white-100": "#f3f3f3",
        "white-100": "#f6f6f6",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/office2.png')",

        "jsf-gradient": "linear-gradient(to right, #1b536c 0%, #EDED 100%)"
      },
    },
  },
  plugins: [],
};