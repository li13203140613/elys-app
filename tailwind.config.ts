import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "slot-spin": "slotSpin 2s ease-in-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        slotSpin: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2000%)" },
          "80%": { transform: "translateY(-100%)" },
          "90%": { transform: "translateY(-110%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(139, 92, 246, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
