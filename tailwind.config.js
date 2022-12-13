/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        height: "height"
      },
      animation: {
        'bounce-fast': 'bounce .5s linear infinite',
      }
    },
  },
  plugins: [],
};
