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
        'TituloExtraGrande': '120px',
        'TituloGrande': '108px',
        'TituloMediano': '68px',
        'TituloExtraGrandePhone': '56px',
        'TituloNormal': '44px',
        'TextoGrande': '32px',
        'TextoMedianoPhone': '24px',
        'TextoNormal': '20px',
        'TextoPequeñoPhone': '12px',
      },
      letterSpacing: {
        'headings': '-0.03em'
      },
      fontFamily: {
        'museomoderno': ['MuseoModerno-VariableFont_wght', 'sans-serif'],
        'manrope': ['Manrope-VariableFont_wght', 'sans-serif'],
        'zillaslab': ['ZillaSlabHighlight-Regular', 'sans-serif'],
      },
      colors: {
        'transparent': 'transparent',
        'primary': '#EF4040',
        'blackText': '#1E1E1E',
        'whiteBackground': '#FCF9F9',
        'greyText': '#818181',
      },
    }
  },
  plugins: [],
}