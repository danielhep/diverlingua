module.exports = {
  plugins: [
    require('@tailwindcss/forms')
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
        diverlingua: {
          lightBlue: '#009BD1',
          purple: '#A6239E'
        },
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
        },
        
      },
      fontSize: {
        '4xl': '2.6rem'
      },
      maxWidth: {
        '2xl': '43.5rem'
       }
    }
  },
  variants: {
    extend: {}
  }
}
