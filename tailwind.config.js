/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        prime: '#1a365d',
        accent: '#A68911',
        accentHov: '#93770D',
        amber: {
          400: '#E5C158', // lighter champagne
          500: '#D4AF37', // Champagne Gold
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'ui-serif', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
