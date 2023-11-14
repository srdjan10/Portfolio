/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "TRAINONE-REGULAR": ["TRAINONE-REGULAR", "sans"],
        "DynaPuff_Condensed-SemiBold": ["DynaPuff_Condensed-SemiBold", "sans"],
        "DynaPuff_Condensed-Medium": ["DynaPuff_Condensed-Medium", "sans"],
      },
    },
  },
  plugins: [],
};
