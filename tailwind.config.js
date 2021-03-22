module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Montserrat']
      },
      spacing: {
        'login-modal-w': '1100px',
        'login-modal-h': '550px'
      },
      backgroundImage: {
        'login-background': 'url("/login.svg")'
      },
      colors: {
        lightGreen: '#77e01b',
        textGray: '#353535',
        navbar: {
          bg: '#101419'
        },
        body: {
          bg: '#030814',
          bglight: '#cdcdcd'
        },
        sidebar: {
          bg: '#03040A',
          bglight: '#0D1836',
          circle: '#00A2CE',
          circleOutline: '#00FD6D',
          search: {
            bg: '#030815',
            text: '#2B2F3A'
          }
        },
        text: {
          white: '#FFFFFF',
          pink: '#FF3366',
          blue: '#00A2CE',
          purple: '#5B00EC'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
