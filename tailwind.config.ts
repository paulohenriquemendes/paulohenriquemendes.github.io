import type { Config } from "tailwindcss";
import tailwindcssAnimated from 'tailwindcss-animated';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // add this line
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        azulEscuro: "#0a1733",
        cinzaClaro: "#f3f4f6",
      },
      fontFamily: {
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindcssAnimated
  ],
} satisfies Config;
