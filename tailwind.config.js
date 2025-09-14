/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2D5016',
        'clean-blue': '#1E88E5',
        'warm-orange': '#FF7043',
        'neutral-dark': '#424242',
        'neutral-light': '#757575',
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}