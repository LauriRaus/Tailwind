/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '960px',
      lg: '1136px',
      xl: '1200px',
    },
    extend: {
      colors: {
        boltGreen: '#2eb875',
        boltBlue: '#4f5cd1',
      },
    },
  },
  plugins: [],
}

