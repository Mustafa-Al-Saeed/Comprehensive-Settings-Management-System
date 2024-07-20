/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
      colors: {
        customBlue: "#1162fb",
        customBlueLight: "#4586ff",
        custom_M_Black: "rgba(0, 0, 0, 0.8)",
        custom_L_Black: "rgba(0, 0, 0, 0.7)",
        custom_D_Gray: "rgb(102 102 102)",
        custom_M_Gray: "#858585",
        custom_ML_Gray: "#e5e5e5",
        custom_L_Gray: "rgba(0, 0, 0, 0.05)",
        custum_L_White: "rgba(255, 255, 255, 0.7)",
        Active: "rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: (theme) => ({
        "hero-pattern":
          "url('https://preview.colorlib.com/theme/plataforma/images/person_1.jpg.webp')",
        // Add as many custom background images as needed
      }),
    },
  },
  plugins: [],
};
