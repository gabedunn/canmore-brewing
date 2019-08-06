const theme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        cborange: {
          default: '#F45A24',
          light: '#E3592A',
          link: '#E15829',
          'link-hover': '#E19129'
        },
        cbblack: {
          grey: '#4a4a4a',
          background: '#0a0a0a'
        },
        bgblack: {
          default: '#0a0a0a'
        }
      },
      screens: {
        'fhd': '1440px'
      },
      fontFamily: {
        cbsans: ['"Open Sans"', ...theme.fontFamily.sans]
      },
      maxHeight: {
        'food-logos': '240px'
      },
      container: {
        center: true
      }
    }
  }
}
