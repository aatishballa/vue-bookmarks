/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#652bd8",
          secondary: "#22a55d",
          accent: "#4a0ffc",
          neutral: "#1b1821",
          "base-100": "#eeedf2",
          info: "#5b91d7",
          success: "#36e7af",
          warning: "#f0c375",
          error: "#e04848",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
