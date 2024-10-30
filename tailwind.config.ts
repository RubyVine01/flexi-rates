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
        mainText: "#2D3242;",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        pt: ["PT Sans", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"], // Fallback cursive для Bebas Neue
      },
    },
  },
  plugins: [],
};
export default config;
