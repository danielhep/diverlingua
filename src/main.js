import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import router from './router'
import App from './App.vue'
import './index.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAWR3QqG-mfrQGd9Q1V12knOGS4XsG0C8k',
  authDomain: 'diverlingua-classes.firebaseapp.com',
  databaseURL: 'https://diverlingua-classes-default-rtdb.firebaseio.com',
  projectId: 'diverlingua-classes',
  storageBucket: 'diverlingua-classes.appspot.com',
  messagingSenderId: '21882698046',
  appId: '1:21882698046:web:ba374ee04743b70564946f',
  measurementId: 'G-1PWHV9S6GV'
}
firebase.initializeApp(firebaseConfig)

const app = createApp(App)
app.use(MotionPlugin)
app.use(router)
app.mount('#app')

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}
