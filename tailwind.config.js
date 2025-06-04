/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#44546a",
        light: "#EFF2F4",
        black: "#1F384C",
        white: "#EFF2F4",
        primary: "#ed7d32",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
        marquee: "marquee 15s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          info: "#1F384C",
          secondary: "#EFF2F4",
          black: "#1F384C",
          accent: "#44546a",
          primary: "#ed7d32",
        },
      },
    ],
  },
};
