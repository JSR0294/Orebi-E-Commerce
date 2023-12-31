/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dm: ['DM Sans', 'sans-serif']
      },
      maxWidth:{
        container: '1600px'
      },
      colors:{
        secondaryColor: '#767676',
        primaryColor: '#262626'
      }
    },
  },
  plugins: [],
}

