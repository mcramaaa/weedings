import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spin: "spin 1s linear infinite", // Durasi 1s, kecepatan linear, looping infinite
        spinslow: "spin 10s linear infinite", // Durasi 1s, kecepatan linear, looping infinite
        spinsverylow: "spin 20s linear infinite", // Durasi 1s, kecepatan linear, looping infinite
      },
      fontFamily: {
        dancing: "Dancing Script Variable",
        dancing2: "Sacramento",
        fancy: "Grandstander Variable",
        fancy2: "Lexend Variable",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          DEFAULT: "#efbf04",
          dark: "#856a00",
        },
        pinky: {
          DEFAULT: "#FF0080",
        },
        javanese: {
          DEFAULT: "#D69A2D",
          secondary: "#DDAB44",
          white: "#FFF8AF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
