/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#2A1A0F", // Dark brown (Background & Header)
        secondary: "#FBB539", // Gold/Yellow (Accents, Highlights)
        accent: "#F97316", // Bright Orange (Call-to-actions)
        background: "#000000B8", // Semi-transparent Black (Containers)
        textPrimary: "#FFFFFF", // White (Main Text)
        textSecondary: "#D1D5DB", // Light Gray (Muted Text)
        highlight: "#FC8704", // Orange (Titles, Headings, Borders)
        overlay: "rgba(0, 0, 0, 0.5)", // Dark overlay for sections
        gradientDark: "#1D006E", // Dark purple (Gradient Section)
        gradientLight: "#330239", // Lighter purple for transitions
      },
      fontFamily: {
        quantum: ["QuantumLemon", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "96px",
      },
      borderRadius: {
        sm: "9px",
        md: "12px",
        lg: "15px",
        xl: "26px",
        full: "9999px",
      },
      boxShadow: {
        default: "0px 5px 5px rgba(0, 0, 0, 0.25)",
      },
    },
  },
};

export default config;
