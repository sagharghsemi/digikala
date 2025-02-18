/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./public/**/*.js"],
  theme: {
    screens: {
      mobile: "0",
      desktop: "1000px",
    },
    extend: {},
  },
  plugins: [],
};
