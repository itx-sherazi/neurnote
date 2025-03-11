/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter Display", "sans-serif"],
      },
      screens: {
       
        'sm': '390px',  // Default Tailwind sm
        'md': '810px',  // Default Tailwind md
        'lg': '1200px', // Default Tailwind lg
       
       
      },
    },
  },
  plugins: [],
}
