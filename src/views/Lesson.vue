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
        :progress="userProgressPercentage"
      />
    </div>
    <div class="flex flex-col justify-center flex-grow items-center text-white ml-64">
      <div class="w-full font-bold pl-10 py-8 text-4xl">
        {{ lesson.name }}
      </div>
      <lesson-card
        :section="curSection"
        @next="nextSection()"
        @previous="previousSection()"
      />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/lesson/sidebar/Sidebar.vue'
import LessonCard from '../components/lesson/LessonCard.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useFirestore, useAuth } from '@vueuse/firebase'
import { useRoute } from 'vue-router'
import { computed, provide, ref } from 'vue'

const db = firebase.firestore()

export default {
  components: {
    Sidebar, LessonCard
  },
  setup (props, context) {
    const lesson = useFirestore(db.doc(`lessons/${useRoute().params.id}`), { name: '', sections: [] })
    provide('lessonID', useRoute().params.id) // provide ID for navbar

    const curSectionInd = ref(1)
    const nextSection = () => {
      if (curSectionInd.value < lesson.value.sections.length) {
        curSectionInd.value = curSectionInd.value + 1
      }
      console.log(curSectionInd.value)
    }
    const previousSection = () => {
      if (curSectionInd.value > 1) {
        curSectionInd.value = curSectionInd.value - 1
      }
      console.log(curSectionInd.value)
    }

    const curSection = computed(() => {
      if (lesson.value.sections.length) { // if the sections haven't loaded yet, return default
        return lesson.value.sections.find(item => item.index === curSectionInd.value)
      } else {
        return {
          title: '',
          description: ''
        }
      }
    })

    const { user } = useAuth(firebase.auth)
    const userProgress = useFirestore(db.doc(`user_progress/${user.value.uid}`), { completed_sections: [] })
    console.log(userProgress.value)
    const completedSectionsCount = computed(() => {
      const completedSections = userProgress.value.completed_sections.filter(item => {
        return (item.match(/(.*)_/)[1] === useRoute().params.id)
      })
      return completedSections.length
    })
    const userProgressPercentage = computed(() => completedSectionsCount.value / lesson.value.sections.length)

    return ({ lesson, curSectionInd, curSection, previousSection, nextSection, userProgressPercentage })
  }
}
</script>

<style>

</style>
