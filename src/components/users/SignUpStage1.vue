<template>
  <div class="w-full flex flex-col items-center text-black">
    <p class="my-4">
      Get started with just an email and password!
    </p>
    <form class="w-72 flex flex-col space-y-4">
      <input
        type="email"
        name="email"
        id="email"
        autocomplete="organization"
        placeholder="E-mail"
        v-model="email"
      >
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        v-model="password"
      >
      <button
        type="submit"
        class="
          bg-blue-500
          rounded-xl
          py-1
          font-bold
          mt-1
          flex-grow
          text-white
          col-span-4
          shadow-md
        "
        @click.prevent="signIn()"
      >
        Continue
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup (context) {
    const email = ref('')
    const password = ref('')
    const submit = () => {
      context.$emit('continue', { email, password })
    }

    return {
      email, password, submit
    }
  }
}
</script>

<style scoped>
input {
  @apply block text-black w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-3xl placeholder-gray-500 placeholder-opacity-50;
}
</style>
