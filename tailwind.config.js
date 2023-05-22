/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'myFont':'Poppins',
    },
    extend: {
      backgroundImage: {
        myBackgroundImg: 'url("./img/bg_hero.svg")',
      },
    },
  },
  plugins: [],
};
