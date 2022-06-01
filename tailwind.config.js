module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Manrope' : ['Manrope', 'sans-serif'],
        'Poppins' : ['Poppins', 'sans-serif'],
        'Inter' : [ 'Inter', 'sans-serif'],
      },
      colors: {
        'primary' : '#06033E',
        'gradientL' : '#7342E4',
        'gradientR' : '#FCD9FB',
      },
      screens :{
        'desktop' : '1440px'
      }
    },
  },
  plugins: [],
}
