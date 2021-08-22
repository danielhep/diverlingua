<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white px-4 py-5 sm:px-6">
    <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
      <div class="ml-4 mt-4">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            >
          </div>
          <div
            class="ml-4"
            v-if="!loading"
          >
            <h3 class="text-lg leading-6 font-medium text-gray-900 flex flex-row">
              {{ section.title }}
              <CheckCircleIcon
                class="text-green-400 flex-shrink-0 ml-2 h-6 w-6"
                v-if="completed"
              />
            </h3>
            <p class="text-sm text-gray-500">
              {{ section.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="ml-4 mt-4 flex-shrink-0 flex">
        <button
          type="button"
          class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          :class="{'bg-green-400 text-white hover:bg-green-300': completed,
                   'text-gray-700 bg-white hover:bg-gray-50': !completed}"
          @click="toggleStatus()"
        >
          <CheckIcon
            v-if="!completed"
            class="-ml-1 mr-2 h-5 w-5"
            :class="{'text-white': completed,
                     'text-gray-400 ': !completed}"
            aria-hidden="true"
          />
          <span>
            {{ completed? 'Mark Uncompleted':'Mark Completed' }}
          </span>
        </button>
        <button
          v-if="editMode"
          type="button"
          class="text-gray-700 bg-white hover:bg-gray-50 ml-3 relative inline-flex items-center px-2 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="$emit('editModeActivate')"
        >
          <PencilIcon
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
        <button
          v-if="editMode"
          type="button"
          class="text-gray-700 bg-white hover:bg-gray-50 ml-3 relative inline-flex items-center px-2 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="$emit('deleteSection')"
        >
          <TrashIcon
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon, CheckCircleIcon, PencilIcon, TrashIcon } from '@heroicons/vue/solid'
import { computed, inject, ref } from 'vue'
import { useAuth, useFirestore } from '@vueuse/firebase'
import firebase from 'firebase'

import { useAllUserProgress } from '../../use/useUserProgress'

const db = firebase.firestore()

export default {
  props: ['section'],
  components: {
    CheckIcon, CheckCircleIcon, PencilIcon, TrashIcon
  },
  emits: ['editModeActivate', 'deleteSection'],
  setup (props) {
    const { user } = useAuth(firebase.auth)
    const editMode = inject('editMode')

    const lessonID = inject('lessonID')
    const userProgress = useAllUserProgress()

    const loading = computed(() => props.section === undefined)
    // const loading = ref(true)
    const completed = computed(() => {
      if (!loading.value) {
        return userProgress.value.includes(`${lessonID}_${props.section.index}`)
      } else {
        return false
      }
    })

    const toggleStatus = (status) => {
      if (completed.value === true) { // This section is completed, so uncomplete it
        db.doc(`user_progress/${user.value.uid}`).update({
          completed_sections: firebase.firestore.FieldValue.arrayRemove(`${lessonID}_${props.section.index}`)
        })
      } else { // it's not completed, so mark it completed
        db.doc(`user_progress/${user.value.uid}`).update({
          completed_sections: firebase.firestore.FieldValue.arrayUnion(`${lessonID}_${props.section.index}`)
        })
      }
    }

    return { completed, toggleStatus, editMode, loading }
  }
}
</script>
