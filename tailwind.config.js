/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        graphik: ['Graphik', 'sans-serif'],
        'graphik-bold': ['Graphik-bold', 'sans-serif']
      }
    }
  },
  plugins: []
}
