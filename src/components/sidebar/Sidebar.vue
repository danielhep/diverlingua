<template>
  <nav
    class="bg-gray-800 w-64 h-full flex flex-col items-center"
    aria-label="Sidebar"
  >
    <sidebar-top class="w-full" />
    <div class="m-6 flex flex-col items-center">
      <lesson-circle
        :progress="0.5"
        :icon-path="chicken"
      />
      <p class="pt-2 text-lg font-bold">
        {{ name }}
      </p>
    </div>
  </nav>
</template>

<script>
import chicken from '../../assets/chicken.svg'
import chick from '../../assets/chick.svg'
import SidebarTop from './SidebarTop.vue'
import LessonCircle from '../LessonCircle.vue'
export default {
  components: { SidebarTop, LessonCircle },
  props: { name: String },
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
