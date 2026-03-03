import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        border: "var(--border)",
        muted: "var(--muted)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        danger: "var(--danger)",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)"],
        body: ["var(--font-manrope)"],
      },
      boxShadow: {
        glow: "0 20px 60px rgba(30, 24, 20, 0.12)",
        card: "0 20px 40px rgba(15, 14, 12, 0.08)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(187, 132, 47, 0.22), transparent 42%)",
      },
    },
  },
  plugins: [animate],
};
export default config;
