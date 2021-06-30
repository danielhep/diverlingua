<template>
  <div class="flex w-full">
    <simple-alert
      title="Discard changes?"
      description="Changing sections without saving will discard your changes. Are you sure you want to leave?"
      negative-button-text="Cancel"
      positive-button-text="Discard"
      :open="showAlertDialog"
      @buttonPress="alertButtonEvent()"
    />
    <div
      class="bg-body-bg text-text-white overflow-y-auto absolute bottom-0 top-24"
    >
      <sidebar
        :name="lesson.name"
        v-if="lesson"
        :sections="lesson.sections"
        @sectionClicked="(index) => goToSection(index)"
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
        v-if="editSection && curSection"
        :section="curSection"
        @updateSection="updateSection"
      />
      <lesson-card
        v-else
        :section="curSection"
        @next="nextSection()"
        @previous="previousSection()"
        @editModeActivate="editSection = true"
        @deleteSection="deleteSection(curSection)"
      />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/lesson/sidebar/Sidebar.vue'
import LessonCard from '../components/lesson/LessonCard.vue'
import EditSectionCard from '../components/lesson/editSection/EditSectionCard.vue'
import SimpleAlert from '../components/ui/SimpleAlert.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useFirestore, useAuth } from '@vueuse/firebase'
import { useRoute } from 'vue-router'
import { computed, provide, ref } from 'vue'
import { isWindow } from '@vueuse/shared'

const db = firebase.firestore()

export default {
  components: {
    Sidebar, LessonCard, EditSectionCard, SimpleAlert
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

    let alertButtonEvent
    const showAlertDialog = ref(false)
    const showConfirmDiscardDialog = () => {
      return new Promise((resolve) => {
        alertButtonEvent = (response) => {
          resolve(response)
          showAlertDialog.value = false
          // true = discard
          // false = cancel
        }
        showAlertDialog.value = true
      })
    }
    const goToSection = async (ind) => {
      // editSection is hoisted, can be used in this function as long as function is called after ref is created
      if (editSection.value) {
        // discard changes?
        const response = await showConfirmDiscardDialog()
        if (!response) {
          curSectionInd.value = ind
          editSection.value = false
        }
      } else {
        curSectionInd.value = ind
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
    const newSection = async () => {
      const newSectionNumber = maxSectionNumber.value + 1
      await lessonRef.update({
        sections: firebase.firestore.FieldValue.arrayUnion({
          index: newSectionNumber,
          title: 'New Section',
          description: 'New section description.',
          type: 'reading'
        })
      })

      curSectionInd.value = newSectionNumber
      editSection.value = true
    }
    const updateSection = (newVal) => {
      const oldSections = lesson.value.sections
      const sectionIndexToEdit = newVal.index
      // firestore does not allow you to update a single itme in an array
      // therefore we have to rebuild the whole array

      // create a new array with the current section swapped out
      const updatedSections = oldSections.map(section => {
        if (section.index === sectionIndexToEdit) {
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

    const deleteSection = (section) => {
      lessonRef.update({
        sections: firebase.firestore.FieldValue.arrayRemove(section)
      })

      db.doc(`user_progress/${user.value.uid}`).update({
        completed_sections: firebase.firestore.FieldValue.arrayRemove(`${lessonID}_${section.index}`)
      })

      if (section.index > 1) {
        curSectionInd.value = section.index - 1
      } else {
        curSectionInd.value = 2
      }
    }

    return ({
      lesson,
      curSectionInd,
      curSection,
      previousSection,
      nextSection,
      userProgressPercentage,
      editSection,
      newSection,
      updateSection,
      deleteSection,
      alertButtonEvent,
      showAlertDialog,
      goToSection
    })
  }
}
</script>

<style>

</style>
