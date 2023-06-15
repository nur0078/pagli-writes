/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
    },
    colors: {
      primary: "#DFDCCF",     // background color
      main: "#000000",
      pencil: "#46535B",
      btn: "#AE9E9E", // background color for (read more..) button

    },
  },
  plugins: [],
}