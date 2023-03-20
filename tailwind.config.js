/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-Inter)"],
        alerta: ["var(--font-Alerta)"],
        spotify: [
          "spotify-circular",
          "spotify-circular-cyrillic",
          "spotify-circular-arabic",
          "spotify-circular-hebrew",
          "Helvetica Neue",
          "helvetica",
          "arial",
          "Hiragino Kaku Gothic Pro",
          "Meiryo",
          "MS Gothic",
        ],
      },
    },
  },
  plugins: [],
};
