import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFCF2",
        secondary: "#403D39",
        tertiary: "#EB5E28",
        accent: "#252422",
        // Legacy aliases for compatibility
        background: "#FFFCF2",
        foreground: "#252422",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-brigten)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
