/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#ff0000",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
