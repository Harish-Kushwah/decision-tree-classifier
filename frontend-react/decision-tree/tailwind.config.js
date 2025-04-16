/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#038961',
        'primary-hover': '#018240',
        'secondary-text': '#2c3e50',
        'tab-inactive': '#666',
        navy: {
          600: '#1e3a8a',
          700: '#1e2a50',
          800: '#1e1e2f',
        },
        coral: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        },
      },
      spacing: {
        'sm': '5px',
        'md': '10px',
        'lg': '1rem',
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'header': '1px 1px 4px rgb(162, 160, 160)',
      },
      height: {
        'header': '80px',
        'select': '100px',
        'logs': '200px',
        'tree': '400px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
  
    },
  },
  plugins: [],
}