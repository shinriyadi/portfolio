/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#4baafb",
        "primary-dark": "#005eb7",
        base: "#0B132A",
        "base-gray": "#4F5665",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
