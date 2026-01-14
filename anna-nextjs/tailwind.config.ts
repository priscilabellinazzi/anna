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
        primary: "#662a2a", // Vinho Premium
        accent: "#c5a044", // Dourado profundo
        background: {
          light: "#fdfbf7", // Bege claro
          dark: "#1a1614"
        }
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        xl: "1.25rem",
        "2xl": "2rem",
        "3xl": "3.5rem"
      },
      boxShadow: {
        premium: "0 20px 50px -12px rgba(102, 42, 42, 0.15)",
        soft: "0 10px 30px -5px rgba(0, 0, 0, 0.05)"
      }
    }
  },
  plugins: [],
};

export default config;
