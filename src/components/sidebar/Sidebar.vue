<template>
  <nav
    class="bg-gray-800 w-64 flex flex-col items-center h-full"
    aria-label="Sidebar"
  >
    <sidebar-top
      class="border-b-2 border-text-blue w-full"
    />
    <div class="flex-grow">
      <lesson-nav
        :sections="sections"
        @sectionClicked="section => $emit('sectionClicked', section)"
      />
    </div>
    <div class="m-6 flex flex-col items-center border-t-2 border-text-blue w-64 pt-4">
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
import LessonNav from './LessonNav.vue'

export default {
  components: { SidebarTop, LessonCircle, LessonNav },
  props: { name: String, sections: String },
  emits: ['sectionClicked'],
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
