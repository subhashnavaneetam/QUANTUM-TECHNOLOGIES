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
        void: "#060606",
        obsidian: "#0d0d0d",
        charcoal: "#171717",
        paper: "#f4f4f1",
        mist: "#c9c9c5",
        ash: "#9a9a96",
        steel: "#5c5c58",
        "toxic-red": "#c0182b",
        "rama-gold": "#cfa14e",
        "rama-ivory": "#f2ead8",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        kannada: ["var(--font-kannada)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
