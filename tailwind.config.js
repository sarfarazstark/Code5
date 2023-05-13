/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/script.js"],
  theme: {
    extend: {
        colors: {
          "penn-blue-5": "rgba(7, 8, 54, 0.511)",
          "phthalo-blue": "hsla(242, 70%, 29%, 1)",
          "cornflower-blue": "hsla(221, 100%, 66%, 1)",
          "palatinate-blue": "hsla(241, 97%, 60%, 1)",
          "french-rose": "hsla(342, 100%, 62%, 1)",
          "penn-blue": "hsla(239, 77%, 12%, 1)",
          "white": "rgb(255 255 255)",
        },
        fontFamily: {
          "Josefin": "Josefin Sans, sans-serif",
          "Kanit": "Kanit, sans-serif",
        },
        right:{
          '4px': '4px'
        }
    },
  },
  extend: {},
  plugins: [],
};
