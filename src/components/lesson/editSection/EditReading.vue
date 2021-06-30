
<template>
  <div class="w-full text-black">
    <label
      for="link"
      class="block text-sm font-medium text-gray-700"
    >Video URL</label>
    <div class="mt-1">
      <input
        type="text"
        name="link"
        id="email"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="https://youtube.com/..."
        v-model="editableSection.videoId"
        aria-describedby="link-description"
      >
    </div>
    <p
      class="mt-2 text-sm text-gray-500"
      id="link-description"
    >
      Please put the full URL to the YouTube video here.
    </p>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
  props: ['section'],
  emits: ['update:section'],
  setup (props, context) {
    const editableSection = ref(props.section)
    watchEffect(() => {
      context.emit('update:section', editableSection)
    })

    return { editableSection }
  }
}
</script>

<style>

</style>
