<template>
  <!-- The Modal -->
  <div
    id="getmod"
    class="fixed z-10 inset-0 overflow-auto bg-opacity-50 bg-black flex items-center justify-center font-display"
  >
    <!-- Modal Content -->

    <div
      class="relative flex items-center justify-center bg-login-background bg-cover bg-right-top rounded-xl w-login-modal-w h-login-modal-h shadow-lg"
      ref="modalRef"
    >
      <img
        class="absolute top-0 left-0 w-4 m-4 opacity-70 cursor-pointer"
        :src="times"
        @click="$emit('close')"
      >
      <div v-if="loading">
        <div class="loader">
          Loading...
        </div>
      </div>
      <div
        class="w-4/12 flex flex-col"
        v-else
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
            type="submit"
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
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import GoogleButton from './misc/googleSignIn.vue'
import FacebookButton from './misc/facebookSignIn.vue'
import firebase from 'firebase'
import times from '../assets/close.svg'

export default {
  components: { GoogleButton, FacebookButton },
  emits: ['close'],
  setup (props, context) {
    const email = ref()
    const password = ref()
    const error = ref('')
    const loading = ref(false)
    const modalRef = ref(null)

    onClickOutside(modalRef, () => { context.emit('close') })

    const signIn = async () => {
      try {
        loading.value = true
        await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        context.emit('close')
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
        context.emit('close')
      } catch {
        // TODO: Handle errors
      } finally {
        loading.value = false
      }
    }

    return { signInWithGoogle, signIn, error, email, password, loading, times, modalRef }
  }
}
</script>

<style scoped>
</style>
