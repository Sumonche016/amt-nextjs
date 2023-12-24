/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonGradient:
          "linear-gradient(90deg, #28ccfd -9.05%, #ae2cff 107.28%)",
        link: "#4b71b6",
        grayLight: "#717585",
        primary: "#3a3a3a",
        mainBackground: "#f9fcfe",
      },

      boxShadow: {
        medium: "4px 0px 16px 0px #d0d0d040",
      },
      borderColor: {
        primary: "#efefef",
      },

      fontSize: {
        "primary-heading-size": "20px",
      },
    },
  },
};
