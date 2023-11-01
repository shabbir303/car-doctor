/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poiret: ['Poiret One', "serif"],
        inter: ['Inter', 'serif']
      }
    },
  },

  daisyui: {
    themes: ["light"],
  },

  plugins: [require("daisyui")],
}

