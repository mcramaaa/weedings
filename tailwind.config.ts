import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: "Dancing Script Variable",
        fancy: "Grandstander Variable",
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
      },
    },
  },
  plugins: [],
};
export default config;
