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
        updown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
        scale: {
          "0%, 100%": { transform: "scale(1)" }, // Ukuran normal
          "50%": { transform: "scale(1.1)" }, // Membesar hingga 1.5x
        },
        rotate: {
          "0%, 100%": { transform: "rotate(0deg)" }, // Awal rotasi
          "50%": { transform: "rotate(20deg)" }, // Rotasi penuh
        },
      },
      animation: {
        spin: "spin 1s linear infinite", // Durasi 1s, kecepatan linear, looping infinite
        spinslow: "spin 10s linear infinite", // Durasi 1s, kecepatan linear, looping infinite
        spinsverylow: "spin 20s linear infinite", // Durasi 1s, kecepatan linear, looping infinite
        updown: "updown 3s linear infinite", // Durasi 1s, kece
        smallbig: "scale 5s linear infinite",
        smallrotate: "rotate 10s linear infinite",
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
        brand: {
          DEFAULT: "#00E5FF",
        },
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
