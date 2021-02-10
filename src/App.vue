<template>
  <nav-bar
    class="h-24 fixed top-0 z-10 w-full"
    v-if="!route.meta.chromeless"
  />
  <div
    class="bg-body-bg text-text-white fixed pt-24 top-0 bottom-0 h-screen overflow-y-auto"
    v-if="!route.meta.chromeless"
  >
    <sidebar />
  </div>
  <div
    :class="!route.meta.chromeless ? 'bg-body-bg pl-64 mt-24 w-full text-text-white' : ''"
  >
    <router-view />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import firebase from 'firebase/app'
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/sidebar/Sidebar.vue'

const route = useRoute()

</script>

<style>
#app {
  height: 100%;
}
</style>
