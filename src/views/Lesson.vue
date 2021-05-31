<template>
  <div class="flex w-full">
    <div
      class="bg-body-bg text-text-white overflow-y-auto absolute bottom-0 top-24"
    >
      <sidebar
        :name="lesson.name"
        v-if="lesson"
        :sections="lesson.sections"
        @sectionClicked="(index) => {curSectionInd = index}"
      />
    </div>
    <div class="flex justify-center flex-grow items-center text-black ml-64 mt-32">
      <lesson-card :section="curSection" />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/lesson/sidebar/Sidebar.vue'
import LessonCard from '../components/lesson/LessonCard.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useFirestore } from '@vueuse/firebase'
import { useRoute } from 'vue-router'
import { computed, provide, ref } from 'vue'

const db = firebase.firestore()

export default {
  components: {
    Sidebar, LessonCard
  },
  setup (props, context) {
    const lesson = useFirestore(db.doc(`lessons/${useRoute().params.id}`))
    provide('lessonID', useRoute().params.id) // provide ID for navbar

    const curSectionInd = ref(1)
    const curSection = computed(() => {
      if (lesson.value) {
        return lesson.value.sections.find(item => item.index === curSectionInd.value)
      } else {
        return {}
      }
    })
    return ({ lesson, curSectionInd, curSection })
  }
}
</script>

<style>

</style>
