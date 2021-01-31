<template>
  <nav-bar class="h-24 fixed top-0 z-10 w-full" />
  <div class="bg-body-bg text-text-white fixed pt-24 top-0 bottom-0 h-screen overflow-y-auto">
    <sidebar />
  </div>
  <div class="bg-body-bg pl-64 mt-24 w-full text-text-white">
    <div class="h-screen">
      HelloWorld
    </div>
    <div class="h-screen">
      HelloWorld
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/sidebar/Sidebar.vue'
</script>

<style>
#app {
  height: 100%;
}
</style>
