<template>
  <div v-if="loading">
    <div class="loader">
      Loading...
    </div>
  </div>
  <form
    class="w-4/12 flex flex-col"
    v-else
    @submit.prevent="signIn()"
  >
    <div
      v-if="error"
      class="font-bold mb-3"
    >
      {{ error }}
    </div>
    <label
      for="uname"
      class="font-semibold mt-1"
    >Email</label>
    <input
      type="text"
      placeholder="Enter Email"
      class="outline-none inline-block rounded-xl my-1 p-2 text-black bg-gray-100 shadow-md border-transparent border-2 focus:bg-white focus:border-gray-400"
      name="uname"
      autofocus
      v-model="email"
      required
    >

    <label
      for="psw"
      class="font-semibold mt-1"
    >Password</label>
    <input
      type="password"
      class="outline-none inline-block rounded-xl my-1 p-2 text-black bg-gray-100 shadow-md border-transparent border-2 focus:bg-white focus:border-gray-400"
      placeholder="Enter Password"
      v-model="password"
      name="psw"
      required
    >
    <div class="grid grid-cols-12 gap-2">
      <button
        class="bg-lightGreen rounded-xl py-1 font-bold mt-1 flex-grow col-span-8 shadow-md"
      >
        Sign Up
      </button>
      <button
        type="submit"
        class="bg-blue-500 rounded-xl py-1 font-bold mt-1 flex-grow col-span-4 shadow-md"
        @click.prevent="signIn()"
      >
        Log In
      </button>
    </div>
    <span class="my-2 text-right">Forgot <a
      href="#"
      style="color:#A6FFCA;"
    >password?</a></span>

    <div class="grid grid-cols-2 gap-2">
      <google-button
        @click="signInWithGoogle()"
        class="col-span-1"
      />
      <facebook-button class="col-span-1" />
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import router from '../../router'
import GoogleButton from '../misc/googleSignIn.vue'
import FacebookButton from '../misc/facebookSignIn.vue'
import firebase from 'firebase'

export default {
  components: { GoogleButton, FacebookButton },
  emits: ['loggedIn'],
  setup (props, context) {
    const email = ref()
    const password = ref()
    const error = ref('')
    const loading = ref(false)

    const signIn = async () => {
      try {
        loading.value = true
        await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        context.emit('loggedIn')
        router.push('lessons')
      } catch (e) {
        // console.log(e)
        if (e.code === 'auth/wrong-password') {
          error.value = 'Incorrect password'
        } else if (e.code === 'auth/invalid-email') {
          error.value = 'That doesn\'t look like an email address.'
        } else if (e.code === 'auth/user-not-found') {
          error.value = 'No account found with that email. Make an account?' // TODO: Make account?
        } else if (e.code === 'auth/user-disabled') {
          error.value = 'Your account is disabled.'
        }
      } finally {
        loading.value = false
      }
    }

    const signInWithGoogle = async () => {
      loading.value = true
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/calendar.events')
      provider.addScope('https://www.googleapis.com/auth/userinfo.email')
      try {
        await firebase.auth().signInWithPopup(provider)
        context.emit('loggedIn')
        router.push('lessons')
      } catch {
        // TODO: Handle errors
      } finally {
        loading.value = false
      }
    }

    return { signInWithGoogle, signIn, error, email, password, loading }
  }
}
</script>
