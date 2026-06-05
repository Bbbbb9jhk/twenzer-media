import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          deep: "#2a3020",
          dark: "#3d4a28",
          mid: "#5c6b35",
          light: "#8a9f55",
          pale: "#c8d4a0",
        },
        burn: {
          dark: "#c45c22",
          DEFAULT: "#d97035",
          light: "#e8905c",
        },
        cream: "#f5f2ea",
        ink: "#111209",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        ar: ["var(--font-cairo)", "sans-serif"],
        en: ["var(--font-dmsans)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      keyframes: {
        march: {
          from: { transform: "translateX(-16px)" },
          to: { transform: "translateX(0)" },
        },
        glowpulse: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        floatUp: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
        floatDown: {
          from: { transform: "translateY(-50%)" },
          to: { transform: "translateY(0)" },
        },
      },
      animation: {
        glowpulse: "glowpulse 3s ease-in-out infinite",
        floatUp: "floatUp 28s linear infinite",
        floatDown: "floatDown 28s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
