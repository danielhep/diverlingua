<template>
  <div class="flex flex-col mx-2 h-full">
    <nav
      class="space-y-1 mt-2 flex-grow"
      aria-label="Sidebar"
    >
      <a
        v-for="item in navItems"
        @click="$emit('sectionClicked', item.index)"
        :key="item.name"
        :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-100 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer w-full']"
        :aria-current="item.current ? 'page' : undefined"
      >
        <component
          :is="item.icon"
          :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
          aria-hidden="true"
        />
        <span class="truncate flex-grow">
          {{ item.title }}
        </span>
        <component
          :is="CheckCircleIcon"
          class="text-green-400 group-hover:text-gray-500 flex-shrink-0 ml-2 h-6 w-6"
          aria-hidden="true"
          v-if="item.completed"
        />
      </a>
    </nav>
    <button
      type="button"
      class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      @click="$emit('newSection')"
      v-if="editMode"
    >
      <PlusIcon
        class="-ml-1 mr-3 h-5 w-5"
        aria-hidden="true"
      />
      Create Section
    </button>
  </div>
</template>

<script>
import { CheckCircleIcon, VideoCameraIcon, DocumentTextIcon, PlusIcon } from '@heroicons/vue/outline'
import { computed, inject } from 'vue'
import { useAuth, useFirestore } from '@vueuse/firebase'
import firebase from 'firebase/app'
import lessonTypes from '../lessonTypes'

import { useAllUserProgress } from '../../../use/useUserProgress'

const db = firebase.firestore()

export default {
  props: { sections: Array },
  emits: ['sectionClicked', 'newSection'],
  components: { PlusIcon },
  setup (props) {
    const { user } = useAuth(firebase.auth)
    // const userProgress = useFirestore(db.doc(`user_progress/${user.value.uid}`), { completed_sections: [] })
    const userProgress = useAllUserProgress()
    const lessonID = inject('lessonID')
    const editMode = inject('editMode')

    const navItems = computed(() => {
      return props.sections.map(section => {
        const icon = lessonTypes.find(type => type.type === section.type).icon

        return {
          title: section.title,
          completed: userProgress.value.includes(`${lessonID}_${section.index}`),
          icon,
          index: section.index
        }
      })
    })
    return { CheckCircleIcon, navItems, editMode }
  }
}
</script>

<style>

</style>
