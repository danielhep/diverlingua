import vue from '@vitejs/plugin-vue'
import ViteFonts from 'vite-plugin-fonts'

/**
 * @type {import('vite').UserConfig}
 */
export default {

  plugins: [
    vue(),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Montserrat',
            styles: 'ital,wght@0,400;0,600;0,700',
            defer: true
          }
        ]
      }
    })
  ],
  optimizeDeps: {
    include: ['firebase/app', 'firebase/auth']
  }
}
