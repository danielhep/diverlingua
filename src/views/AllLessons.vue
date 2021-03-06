<template>
  {{ groupsD }} hello
  <div class="flex flex-row justify-center">
    <div
      class="flex flex-col items-center"
      v-for="group in groupsD"
      :key="group.name"
    >
      <lesson-circle
        :progress="40"
        class="w-32 ml-2"
        :icon-path="chick"
      />
      <p class="pt-2 text-lg font-bold">
        Artículos
      </p>
    </div>
  </div>
</template>

<script>
import chick from '../assets/chick.svg'
import LessonCircle from '../components/LessonCircle.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { ref } from 'vue'

const db = firebase.firestore()

export default {
  components: {
    LessonCircle
  },
  async setup () {
    const lessonGroups = await db.collection('lesson_groups/').get()
    const groupsD = ref()
    const lessonD = ref()

    lessonGroups.forEach(group => {
      groupsD.value = group.data()
      console.log(groupsD.value)
      groupsD.value.lessons.forEach(async lesson => {
        lessonD.value = (await lesson.get()).data()
      })
    })

    return { groupsD, lessonD }
  },
  data () {
    return {
      chick
    }
  }
}
</script>

<style>

</style>
