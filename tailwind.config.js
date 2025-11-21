module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#F08787',
        'LemonChiffon':'#CADCAE',
        'pastel':'#D2DCB6'
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}