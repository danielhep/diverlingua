module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navbar: {
          bg: '#101419'
        },
        body: {
          bg: '#030814'
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
