/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Helvetica Neue', 'Arial']
      },
      colors: {
        brand: {
          DEFAULT: '#111111'
        }
      },
      borderRadius: {
        xl: '1rem'
      }
    },
  },
  plugins: [],
}
