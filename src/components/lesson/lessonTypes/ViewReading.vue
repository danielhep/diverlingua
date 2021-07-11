<template>
  <div
    v-html="compiledMd"
    id="sectionBody"
    class="text-black text-left w-full"
  />
</template>

<script>
import marked from 'marked'
import { computed } from 'vue'
export default {
  props: ['section'],
  setup (props) {
    const compiledMd = computed(() => marked(props.section.md, {
      smartypants: true
    }))
    return { compiledMd }
  }
}
</script>

<style>
#sectionBody h1 {
  @apply mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl;
}

#sectionBody p {
  @apply mt-6 text-gray-500 mx-auto;
}
</style>
