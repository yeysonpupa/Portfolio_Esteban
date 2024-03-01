/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        'md2': '872px'
      },
      fontSize: {
        'TituloExtraGrande': ['clamp(8rem, 16vw, 132px)'],
        'TituloGrande': ['clamp(7rem, 14vw, 120px)'],
        'TituloMediano': ['clamp(4rem, 10vw, 72px)'],
        'TituloExtraGrandePhone': ['clamp(3rem, 8vw, 60px)'],
        'TituloNormal': ['clamp(2.5rem, 6vw, 48px)'],
        'TextoGrande': ['clamp(2rem, 5vw, 36px)'],
        'TextoMedianoPhone': ['clamp(1.75rem, 4vw, 28px)'],
        'TextoNormal': ['clamp(1.5rem, 3.5vw, 24px)'],
        'TextoPequeñoPhone': ['clamp(0.75rem, 2vw, 12px)'],
      },
      letterSpacing: {
        'headings': '-0.03em'
      },
      fontFamily: {
        'museomoderno': ['MuseoModerno-VariableFont_wght', 'sans-serif'],
        'manrope': ['Manrope-VariableFont_wght', 'sans-serif'],
      },
      colors: {
        'primary': '#EF4040',
        'blackText': '#1E1E1E',
        'whiteBackground': '#FCF9F9',
        'greyText': '#818181',
      },
    }
  },
  plugins: [],
}