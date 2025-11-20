module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#00FFFF',
        'LemonChiffon':'#FFFACD'
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}