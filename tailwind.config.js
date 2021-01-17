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
          bg: '#0D1836',
          circle: '#00ACCC',
          search: {
            bg: '#030814',
            text: '#2B2F3A'
          }
        },
        text: {
          white: '#FFFFFF',
          pink: '#FF3366'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
