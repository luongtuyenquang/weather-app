/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts,tsx,jsx,html,js}"],
  theme: {
    extend: {
      colors: {
        "light-green-1": "#457689",
        "light-green-2": "#00808b",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
