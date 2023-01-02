/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "open-san": ["Open Sans", "sans-serif"],
      "cursive-marker": ["Permanent Marker", "cursive"],
    },
    extend: {
      backgroundImage: {
        "banner-image": "url('/images/arcewave-project-banner.jpg')",
      },
      colors: {
        primary: colors.rose,
      },
      screens: {
        sm: "1px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
