/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#fbbf24",
        gray: {
          DEFAULT: "#d1d5db",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#374151",
        },
        zinc: "#1f1f1f",
      },
    },
  },
  plugins: [],
};