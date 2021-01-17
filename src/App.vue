<template>
  <div class="flex flex-col h-screen">
    <nav-bar />
    <div class="bg-body-bg flex flex-row flex-grow text-text-white h-100">
      <div>
        <sidebar />
      </div>
      <div />
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
