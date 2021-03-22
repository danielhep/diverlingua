<template>
  <div class="flex h-10 bg-gray-300 rounded-xl py-2 px-4 font-bold mt-1 flex-grow shadow-md text-gray-700 cursor-pointer hover:bg-white">
    <img :src="GoogleLogo">
    <span class="ml-2 uppercase tracking-wider text-center w-full">
      Google
    </span>
  </div>
</template>

<script>
import GoogleLogo from '../../assets/google.svg'
export default {
  setup () {
    return { GoogleLogo }
  }
}
</script>

<style>

</style>
