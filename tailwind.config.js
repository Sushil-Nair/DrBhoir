/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {      
    extend: {
      colors:{
        'cta': '#016F80',
        'primary': '#F8F8F8',
        'fb': '#4267B2',
        'insta': '#C13584'
      },
      screens: {
        'md': '835px'
      }
    },
  },
  plugins: [],
}