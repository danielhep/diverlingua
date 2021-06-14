<template>
  <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 w-8/12">
    <edit-card-header
      v-model:section="editableSection"
    />
    <div class="px-4 py-5 sm:p-6 flex justify-center">
      <component
        :is="editComponent"
        v-model:section="editableSection"
      />
    </div>
    <div class="px-4 py-4 sm:px-6">
      <!-- Content goes here -->
      <!-- We use less vertical padding on card footers at all sizes than on headers or body sections -->
      <edit-card-footer
        @save="save()"
      />
    </div>
  </div>
</template>

<script>
import EditCardFooter from './EditCardFooter.vue'
import EditCardHeader from './EditCardHeader.vue'
import { ref, toRef } from 'vue'
import lessonTypes from '../lessonTypes'
export default {
  props: ['section'],
  emits: ['updateSection'],
  components: { EditCardFooter, EditCardHeader },
  setup (props, context) {
    const section = toRef(props, 'section')
    const editableSection = ref({ ...section.value })
    const save = () => {
      context.emit('updateSection', editableSection.value)
    }

    const editComponent = lessonTypes.find(type => type.type === section.value.type).editComponent
    return { editableSection, save, editComponent }
  }
}
</script>

<style>

</style>
