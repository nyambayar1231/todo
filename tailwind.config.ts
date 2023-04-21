import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#000000",
        primaryGray: "#D8D8D8",
        primaryRed: "#FF4F5A",
        secondaryGray: "#737373",
      },
      fontFamily: {
        rowdy: ["Rowdies", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
