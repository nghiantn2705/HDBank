/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('/src/image/thumb.png')",
        "bg-img-1": "url('/src/image/thumb2x3.jpg')",
      },
      colors: {
        "cl-bg": "#5B2D40",
        "cl-bg-1": "#4c2230",
        "cl-text": "#fcd698",
        "cl-bg-2": "#6e324b",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
