module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        black_900: "#000000",
        pink_601: "#cc2b5e",
        pink_600: "#e1204c",
        purple_800: "#753a88",
        white_A700: "#ffffff",
      },
      fontFamily: {
        nunito: "Nunito",
        quicksand: "Quicksand",
        anekbangla: "Anek Bangla",
        reemkufifun: "Reem Kufi Fun",
      },
      borderRadius: {
        radius50: "50%",
        radius285: "28.5px",
        radius1339: "13.39px",
        radius3193: "31.93px",
      },
      backgroundImage: {
        gradient: "linear-gradient(145.19deg ,#cc2b5e,#753a88)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
