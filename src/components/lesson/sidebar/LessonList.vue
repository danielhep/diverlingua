<template>
  <ul class="w-full">
    <li
      v-for="lesson in lessons"
      :key="lesson.name"
      class="py-1 pl-8 hover:bg-sidebar-search-bg cursor-pointer"
    >
      {{ lesson.name }}
    </li>
  </ul>
</template>

<script>
import { useFirestore } from '@vueuse/firebase'
export default {
  setup (props) {
    return {
      lessons: [
        {
          name: 'Lesson 1'
        },
        {
          name: 'Lesson 2'
        },
        {
          name: 'Lesson 3'
        },
        {
          name: 'Lesson 4'
        }
      ]
    }
  }
}
</script>
