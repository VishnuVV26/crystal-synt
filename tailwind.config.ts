import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
]
,
  theme: {
    extend: {
      colors: {
  primary: "var(--color-primary)",
  dark: "var(--color-dark)",
  secondary: "var(--color-secondary)",
  accent: "var(--color-accent)",
  gray: "var(--color-gray)",
  muted: "var(--color-muted)",
  background: "var(--color-background)",
  foreground: "var(--color-foreground)",
      },
      fontFamily: {
  inter: ["Inter", "var(--font-inter)", 'ui-sans-serif', 'system-ui'],
  ibm: ["IBM Plex Sans", "var(--font-ibm)", 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};

export default config;
