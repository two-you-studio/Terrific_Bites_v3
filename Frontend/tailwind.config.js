/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#4E1F20',
      'primary-light': '#994D45',
      'secondary' : '#F0F1EB',
      'success' : '#B8C68F',
      'warning' : '#64A090',
      'error' : '#E87A68',
      'white' : '#fff',
      'gray' : '#585C67',
    },
    fontFamily: {
      'body' : ['Poppins', 'sans-serif'],
      'heading' : ['Decohead FREE', 'sans-serif'],
      'Subheading' : ['D-DIN', 'sans-serif'],
    },
  },
  plugins: [],
}