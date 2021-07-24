<template>
  <nav
    class="space-y-1 mt-2 mx-2"
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
</template>

<script>
import { CheckCircleIcon, VideoCameraIcon, DocumentTextIcon } from '@heroicons/vue/outline'
import { computed, inject } from 'vue'
import { useAuth, useFirestore } from '@vueuse/firebase'
import firebase from 'firebase/app'

const db = firebase.firestore()

export default {
  props: { sections: Array },
  emits: ['sectionClicked'],
  setup (props) {
    const { user } = useAuth(firebase.auth)
    const userProgress = useFirestore(db.doc(`user_progress/${user.value.uid}`), { completed_sections: [] })
    const lessonID = inject('lessonID')

    const navItems = computed(() => {
      return props.sections.map(section => {
        let icon
        switch (section.type) {
          case 'video':
            icon = VideoCameraIcon
            break
          case 'blog':
            icon = DocumentTextIcon
            break
        }

        return {
          title: section.title,
          completed: userProgress.value.completed_sections.includes(`${lessonID}_${section.index}`),
          icon,
          index: section.index
        }
      })
    })
    return { CheckCircleIcon, navItems }
  }
}
</script>

<style>

</style>
