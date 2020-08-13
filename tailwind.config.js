const theme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        cborange: {
          default: '#F45A24',
          dark: '#de5220',
          light: '#E3592A',
          link: '#E15829',
          'link-hover': '#E19129',
          'navbar-hover': '#f2480c'
        },
        cbblack: {
          grey: '#4a4a4a',
          background: '#0a0a0a',
          text: '#363636'
        },
        bgblack: {
          default: '#0a0a0a'
        }
      },
      screens: {
        fhd: '1440px'
      },
      fontFamily: {
        cbsans: ['"Open Sans"', ...theme.fontFamily.sans],
        cbtitle: ['"Archivo Black"', 'Arial', 'sans-serif'],
        'beer-info': ['"Oswald"', 'Arial', 'sans-serif']
      },
      maxHeight: {
        'food-logos': '240px',
        'social-logo': '64px'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'social-md': 'calc(33.33% - 2rem)',
        'social-xl': 'calc(25% - 2rem)'
      },
      container: {
        center: true
      },
      boxShadow: {
        '2xl-dark': '0 25px 50px -12px rgba(0, 0, 0, 1)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
