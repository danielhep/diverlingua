<template>
  <div class="flex">
    <div
      class="bg-body-bg text-text-white h-screen overflow-y-auto"
    >
      <sidebar
        :name="lesson.name"
        v-if="lesson"
      />
    </div>
    <div class="flex justify-center flex-grow items-center text-black">
      <div class="bg-white overflow-hidden shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          Lesson Slides
        </div>
        <div class="px-4 py-5 sm:p-6">
          {{ lesson }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/sidebar/Sidebar.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useFirestore } from '@vueuse/firebase'
import { useRoute } from 'vue-router'

const db = firebase.firestore()
const storage = firebase.storage()

export default {
  components: {
    Sidebar
  },
  setup (props, context) {
    const lesson = useFirestore(db.doc(`lessons/${useRoute().params.id}`))
    return ({ lesson })
  }
}
</script>

<style>

</style>
