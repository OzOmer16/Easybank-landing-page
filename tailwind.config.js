module.exports = {
  mode: 'jit',
  content: [
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkBlue: 'hsl(233, 26%, 24%)',
        primaryLimeGreen: 'hsl(136, 65%, 51%)',
        primaryBrightCyan: 'hsl(192, 70%, 51%)',
        neutralGrayishBlue: 'hsl(233, 8%, 62%)',
        neutralLightGrayishBlue: 'hsl(220, 16%, 96%)',
        neutralVeryLightGray: 'hsl(0, 0%, 98%)',
        neutralWhite: 'hsl(0, 0%, 100%)'

      },
      fontFamily: {
        publicSans: ['Public Sans', 'sans-serif']
      },
      screens: {
        customMobile: { 'raw': '(max-width: 375px)' },
        customTablet: { 'raw': '(max-width: 540px)' },
        customLgTablet: { 'raw': '(max-width: 800px)' },
        container: { 'raw': '(max-width: 1152px)' },
        customDesktop: { 'raw': '(max-width: 1440px)' }
      }
      
    },
  },
  plugins: [],
}






