<template>
  <div class="bg-sidebar-bg w-64 h-full flex flex-col items-center">
    <sidebar-top class="w-full" />
    <div class="m-6 flex flex-col items-center">
      <lesson-circle
        :progress="0.5"
        :icon-path="chicken"
      />
      <p class="pt-2 text-lg font-bold">
        Artículos
      </p>
    </div>
    <div class="flex flex-col items-start bg-sidebar-bglight w-full">
      <div
        class="flex flex-row items-center w-full pt-4"
        v-for="lesson in lessons"
        :key="lesson.name"
      >
        <lesson-circle
          :progress="lesson.progress"
          class="w-32 ml-2"
          :icon-path="lesson.icon"
        />
        <p class="ml-2 pt-2 text-lg">
          {{ lesson.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import chicken from '../../assets/chicken.svg'
import chick from '../../assets/chick.svg'
import SidebarTop from './SidebarTop.vue'
import LessonCircle from '../LessonCircle.vue'
export default {
  components: { SidebarTop, LessonCircle },
  setup () {
    return {
      chicken,
      chick,
      lessons: [
        {
          name: 'Test1',
          icon: chick,
          progress: 1
        },
        {
          name: 'Test2',
          icon: chick,
          progress: 0.55
        },
        {
          name: 'Test4',
          icon: chicken,
          progress: 0.22
        }
      ]
    }
  }
}
</script>
