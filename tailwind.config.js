/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        darkBackground: "hsl(207, 26%, 17%)",
        darkElement: "hsl(209, 23%, 22%)",
        darkText: "hsl(0, 0%, 100%)",

        lightBackground: "hsl(0, 0%, 98%)",
        lightElement: "hsl(0, 0%, 100%)",
        lightText: "hsl(200, 15%, 8%)",
      },
    },
  },
  plugins: [],
};
