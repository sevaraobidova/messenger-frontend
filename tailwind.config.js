/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "rgba(var(--primary-color))",
        secondary: "rgba(var(--secondary-blue))",
        primaryText: "rgba(var(--primary-text))",
        primaryInput: "rgba(var(--primary-input))",
        inputText: "rgba(var(--input-text))",
        green: "rgba(var(--state-green))",
        warning: "rgba(var(--state-warning))",
        error: "rgba(var(--state-error))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        textRegular: "var(--text-regular)",
        textMedium: "var(--text-medium)",
        heading: "var(--heading)",
        headingMedium: "var(--medium-heading)",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        extrathin: 200,
        roman: 300,
        link: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        sm: { max: "640px" },
        md: { max: "768px" },
        lg: { max: "1024px" },
        xl: { max: "1280px" },
        xxl: { max: "1324px" },
        "3xl": { max: "1536px" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
