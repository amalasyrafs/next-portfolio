const { fontFamily } = require("tailwindcss/defaultTheme");
const { colors } = require("./constants/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        raleway: ["var(--font-raleway)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
