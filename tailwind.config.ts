import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        primary: {
          DEFAULT: "var(--color-primary)",
          fg: "var(--color-on-primary)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          fg: "var(--color-on-surface)",
          border: "var(--color-surface-border)",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      spacing: {
        gutter: "var(--space-gutter)",
        section: "var(--space-section)",
      },
      boxShadow: {
        soft: "0 10px 20px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
