import { nextui } from "@nextui-org/react";


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  cursor: {
    'custom-cursor': "url('./src/assets/cursor/pokeballCursor.svg') 0 0, auto",
  },
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}