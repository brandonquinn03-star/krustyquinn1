/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B0B0B",        // dark background
          card: "#151515",      // card bg
          border: "#262626",    // subtle borders
          text: "#FFFFFF",      // base text
          accent: "#E85D04",    // Hermes orange
          accent2: "#FFEDD5"    // warm cream (optional highlight)
        }
      },
      borderRadius: { xl: "1.25rem", "2xl": "1.75rem" },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"] }
    }
  },
  plugins: [],
}
