/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'bw-black': '#000000',
        'bw-white': '#FFFFFF',
        'bw-accent': '#00FFFF', // Use only for hover/focus
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
      },
      borderRadius: {
        'md': '0.375rem',
        'lg': '0.5rem',
      },
      boxShadow: {
        'bw': '0 2px 8px 0 rgba(0,0,0,0.10)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 