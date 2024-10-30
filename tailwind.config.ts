import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F7F7",
        mainText: "#2D3242",
        secondaryText: "#818798",
        link: "#2D97F9",
        icon: "#2F4353",
        blueAccent: "#01B9C5",
        redAccent: "#FD4D35",
        greyAccent: "#95979F"
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        ptRootUI: ["PT Root UI", "sans-serif"],
        bebas: ["Bebas Neue Cyrillic", "sans-serif"], 
      },
      fontSize: {
        "40px": "40px",
      },
      lineHeight: {
        "18px": "18px",
        "44px": "44px", 
      },
      borderRadius: {
        "60px": "60px", 
      },
    },
  },
  plugins: [],
};
export default config;
