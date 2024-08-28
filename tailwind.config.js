/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    


    extend: {
      fontFamily:{
        'sans': ['Mona-Sans', 'sans-serif'],
      },
      colors:{
        'primary':'#006EFF',
        'secondary':'rgba(0, 110, 255, 0.1)'
      },
      screens: {
        'sm': '640px',  
        'md': '768px', 
        'lg': '1200px', 
        'xl': '1300px', 
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
