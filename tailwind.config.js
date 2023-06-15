/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Dmsans' : ['DM Sans', 'sans-serif']
      },
      boxShadow :{
        '3xl' : ' 0px 5px 15px rgba(0, 0, 0, 0.35)'
      }
    },
  },
  plugins: [],
}