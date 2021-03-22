<template>
  <div class="flex h-10 bg-gray-300 rounded-xl py-2 px-4 font-bold mt-1 flex-grow shadow-md text-gray-700 cursor-pointer hover:bg-white">
    <img :src="FacebookLogo">
    <span class="ml-2 uppercase tracking-wider text-center w-full">
      Facebook
    </span>
  </div>
</template>

<script>
import FacebookLogo from '../../assets/f_logo.png'
export default {
  setup () {
    return { FacebookLogo }
  }
}
</script>

<style>

</style>
