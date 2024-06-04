/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // fontFamily: {
    //   display: ["Oswald"],
    //   body: ['"Open Sans"'],
    // },

    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro"],
  },
};
