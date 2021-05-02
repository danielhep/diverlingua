<template>
  <div class="flex">
    <input
      type="text"
      placeholder="Email"
      class="outline-none inline-block rounded-l-xl my-1 p-2 text-black bg-gray-100 shadow-md border-transparent border-2 focus:bg-white focus:border-gray-400"
      name="email"
      autofocus
      v-model="email"
      required
    >
    <button
      type="submit"
      class="bg-blue-500 rounded-xl py-1 font-bold mt-1 shadow-md w-16"
      @click.prevent="signIn()"
    >
      Log In
    </button>
  </div>
</template>

<script>
export default {
  props: [''],
  setup () {

  }
}
</script>
