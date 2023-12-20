/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        deca: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        softBlue: "#5468E7",
      },
    },
  },
  plugins: [],
};
