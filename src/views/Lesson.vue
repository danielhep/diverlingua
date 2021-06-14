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
        @activateEditSection="editSection = true"
        @newSection="newSection()"
        :progress="userProgressPercentage"
      />
    </div>
    <div class="flex flex-col justify-center flex-grow items-center text-white ml-64">
      <div class="w-full font-bold pl-10 py-8 text-4xl">
        {{ lesson.name }}
      </div>
      <edit-section-card
        v-if="editSection"
        :section="curSection"
        @updateSection="updateSection"
      />
      <lesson-card
        v-else
        :section="curSection"
        @next="nextSection()"
        @previous="previousSection()"
        @editModeActivate="editSection = true"
      />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/lesson/sidebar/Sidebar.vue'
import LessonCard from '../components/lesson/LessonCard.vue'
import EditSectionCard from '../components/lesson/editSection/EditSectionCard.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useFirestore, useAuth } from '@vueuse/firebase'
import { useRoute } from 'vue-router'
import { computed, provide, ref } from 'vue'

const db = firebase.firestore()

export default {
  components: {
    Sidebar, LessonCard, EditSectionCard
  },
  setup (props, context) {
    // Load the lesson
    const lessonRef = db.doc(`lessons/${useRoute().params.id}`)
    const lesson = useFirestore(lessonRef, { name: '', sections: [] })
    const lessonID = useRoute().params.id
    provide('lessonID', lessonID) // provide ID for sidebar

    // Navigation between section
    const curSectionInd = ref(1)
    const nextSection = () => {
      if (curSectionInd.value < lesson.value.sections.length) {
        curSectionInd.value = curSectionInd.value + 1
      }
    }
    const previousSection = () => {
      if (curSectionInd.value > 1) {
        curSectionInd.value = curSectionInd.value - 1
      }
    }

    // calculate current section
    const curSection = computed(() => {
      return lesson.value.sections.find(item => item.index === curSectionInd.value)
    })

    // calculate user progress
    const { user } = useAuth()
    const userProgress = useFirestore(db.doc(`user_progress/${user.value.uid}`), { completed_sections: [] })
    const completedSectionsCount = computed(() => {
      const completedSections = userProgress.value.completed_sections.filter(item => {
        return (item.match(/(.*)_/)[1] === lessonID) // just get a list of completed sections for this lesson
      })
      return completedSections.length
    })
    const userProgressPercentage = computed(() => completedSectionsCount.value / lesson.value.sections.length)

    // section editing
    const editSection = ref(false)
    const maxSectionNumber = computed(() => {
      return lesson.value.sections.reduce((accumulator, curVal) => {
        if (curVal.index > accumulator) {
          return curVal.index
        } else {
          return accumulator
        }
      }, 0)
    })
    const newSection = () => {
      const newSectionNumber = maxSectionNumber.value + 1
      lessonRef.update({
        sections: firebase.firestore.FieldValue.arrayUnion({
          index: newSectionNumber
        })
      })

      curSectionInd.value = newSectionNumber.value
      editSection.value = true
    }
    const updateSection = (newVal) => {
      const oldSections = lesson.value.sections
      // firestore does not allow you to update a single itme in an array
      // therefore we have to rebuild the whole array

      // create a new array with the current section swapped out
      const updatedSections = oldSections.map(section => {
        if (section.index === newVal.index) {
          return newVal
        } else {
          return section
        }
      })

      lessonRef.update({
        sections: updatedSections
      })

      editSection.value = false
    }

    return ({ lesson, curSectionInd, curSection, previousSection, nextSection, userProgressPercentage, editSection, newSection, updateSection })
  }
}
</script>

<style>

</style>
