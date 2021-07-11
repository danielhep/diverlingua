<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 w-8/12">
    <lesson-card-header
      :section="section"
      @editModeActivate="$emit('editModeActivate')"
      @deleteSection="$emit('deleteSection')"
    />
    <div class="px-4 py-5 sm:p-6 flex justify-center">
      <div v-if="loading">
        <div class="loader">
          Loading...
        </div>
      </div>
      <component
        v-else
        :is="viewComponent"
        :section="section"
      />
    </div>
    <div class="px-4 py-4 sm:px-6">
      <!-- Content goes here -->
      <!-- We use less vertical padding on card footers at all sizes than on headers or body sections -->
      <lesson-card-footer
        @next="$emit('next')"
        @previous="$emit('previous')"
      />
    </div>
  </div>
</template>

<script>
import LessonCardHeader from './LessonCardHeader.vue'
import LessonCardFooter from './LessonCardFooter.vue'
import lessonTypes from './lessonTypes'
import { computed, toRef } from 'vue'

export default {
  props: ['section'],
  emits: ['next', 'previous', 'editModeActivate', 'deleteSection'],
  components: { LessonCardHeader, LessonCardFooter },
  setup (props) {
    const section = toRef(props, 'section')
    const loading = computed(() => section.value === undefined)
    console.log(section.value)
    const viewComponent = computed(() => {
      if (!loading.value) {
        return lessonTypes.find(type => type.type === section.value.type).viewComponent
      } else {
        return null
      }
    })
    return { viewComponent, loading }
  }
}
</script>
