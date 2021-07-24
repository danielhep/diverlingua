<template>
  <nav-bar
    class="h-24 fixed top-0 z-10 w-full"
    v-if="!route.meta.chromeless"
    @editModeToggle="editMode = !editMode"
  />
  <div
    :class="!route.meta.chromeless ? 'bg-body-bg mt-24 w-full text-text-white' : ''"
  >
    <router-view />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'

const route = useRoute()

const editMode = ref(false)
provide('editMode', editMode)
</script>

<style >
#app {
  height: 100%;
}

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}
</style>
