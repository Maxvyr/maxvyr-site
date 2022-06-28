/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#bbbbbb",
      },
      fontSize: {
        "clamp-lg": "clamp(34px, 5vw, 72px)",
        "clamp-xl": "clamp(37px, 5vw, 60px)",
      },
    },
  },
  plugins: [],
};
