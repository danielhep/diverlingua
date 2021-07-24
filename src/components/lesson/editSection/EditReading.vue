
<template>
  <div class="w-full text-black">
    <v-md-editor
      v-model="editableSection.md"
      height="400px"
    />
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
