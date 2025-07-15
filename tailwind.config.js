/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    // Para Next.js App Router
    './pages/**/*.{js,ts,jsx,tsx}',  // Para Pages Router
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        petrolBlue: '#264653',
        softMustard: '#E9C46A',
        lightPeach: '#F4A261',
        darkGraySoft: '#2A2D34',
        lightGray: '#F0EFEB',
        aquaGreen: '#2A9D8F',
        terracottaRed: '#E76F51',
      },
    },
  },
  plugins: [],
}
