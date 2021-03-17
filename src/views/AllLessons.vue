<template>
  <div
    class="flex flex-col items-center"
    v-for="(group, groupInd) in lessonGroups"
    :key="group.name"
  >
    <div
      class="flex flex-row items-center"
    >
      {{ group.name }}
      <div
        class="flex flex-col items-center"
        v-for="lesson in lessonsByGroup[groupInd]"
        :key="lesson.name"
      >
        <lesson-circle
          :progress="40"
          class="w-32 ml-2"
          :icon-path="chick"
        />
        <p class="pt-2 text-lg font-bold">
          {{ lesson.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import chick from '../assets/chick.svg'
import LessonCircle from '../components/LessonCircle.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useFirestore } from '@vueuse/firebase'
import { watch, ref } from 'vue'

const db = firebase.firestore()

export default {
  components: {
    LessonCircle
  },
  setup () {
    const lessonGroups = useFirestore(db.collection('lesson_groups/').orderBy('order'))

    const lessonsByGroup = ref([])
    watch(lessonGroups, (newGroups) => {
      newGroups.forEach((group, groupInd) => {
        lessonsByGroup.value[groupInd] = []
        group.lessons.forEach(async (lessonDoc) => {
          const lesson = await lessonDoc.get()
          lessonsByGroup.value[groupInd].push(lesson.data())
        })
      })
    })
    return { lessonGroups, lessonsByGroup }
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
