/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
      },
      colors: {
        "red-700": "#d01a23",
        "red-800": "#ff020e",
        "red-900": "#8d141a",
      },
      backgroundImage: {
        cupcake: "url('/images/cupcake.jpeg')",
      },
    },
  },
  plugins: [],
};
