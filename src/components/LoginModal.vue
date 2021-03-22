<template>
  <!-- The Modal -->
  <div
    id="getmod"
    class="fixed z-10 inset-0 overflow-auto bg-opacity-50 bg-black flex items-center justify-center font-display"
  >
    <span
      onclick="document.getElementById('getmod').style.display='none'"
      class="close"
      title="Close Modal"
    >&times;</span>

    <!-- Modal Content -->

    <div
      class="flex items-center justify-center bg-login-background bg-cover bg-right-top rounded-xl w-login-modal-w h-login-modal-h"
    >
      <div class="w-4/12 flex flex-col">
        <label
          for="uname"
          class="font-semibold mt-1"
        >Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          class="outline-none inline-block rounded-xl my-1 p-2 text-black bg-gray-100 shadow-md border-transparent border-2 focus:bg-white focus:border-gray-400"
          name="uname"
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
          >
            Log In
          </button>
        </div>
        <span class="my-2 text-right">Forgot <a
          href="#"
          style="color:#A6FFCA;"
        >password?</a></span>

        <div class="grid grid-cols-2 gap-2">
          <google-button class="col-span-1" />
          <facebook-button class="col-span-1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleButton from './misc/googleSignIn.vue'
import FacebookButton from './misc/facebookSignIn.vue'
export default {
  components: { GoogleButton, FacebookButton }
}
</script>

<style scoped>
</style>
