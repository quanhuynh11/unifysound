/** @type {import('tailwindcss').Config} */
export default {
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
        primaryBlue: "#13293D",
        secondaryBlue: "#006494",
        tertiaryBlue: "#247BA0",
        brightBlue: "#1B98E0",
      },
    },
  },
  plugins: [],
};
