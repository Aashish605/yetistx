/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary : "#83D3EC",
        secondary : "#212738"
      },
      fontFamily: {
        poppins : ["Poppins", "serif"],
        shadow : ["Shadows Into Light", "cursive"]
      }
    },
  },
  plugins: [
    daisyui
  ],
}

