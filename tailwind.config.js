/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts,tsx,jsx,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        "light-black": "1px 1px 7px 1px #00000052",
      },
    },
  },
  plugins: [],
};
