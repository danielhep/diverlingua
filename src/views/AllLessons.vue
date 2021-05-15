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
          class="w-32 ml-2 cursor-pointer"
          :icon-path="lesson.iconURL"
          @click.prevent="$router.push({name: 'lesson', params: {id: lesson.id}})"
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
const storage = firebase.storage()

export default {
  components: {
    LessonCircle
  },
  setup () {
    const lessoniconsref = storage.ref('/lessonIcons')

    const lessonGroups = useFirestore(db.collection('lesson_groups/').orderBy('order'))

    const lessonsByGroup = ref([])
    watch(lessonGroups, (newGroups) => { // when lessonGroups changes, get the contained lessons
      newGroups.forEach((group, groupInd) => {
        lessonsByGroup.value[groupInd] = [] // create empty arrays for each group
        group.lessons.forEach(async (lessonDoc) => { // for each lesson in the group
          const lesson = (await lessonDoc.get()).data() // get the lesson referred to
          lesson.iconURL = await lessoniconsref.child(`${lesson.icon}.svg`).getDownloadURL()
          lesson.id = lessonDoc.id // add the ID back in
          lessonsByGroup.value[groupInd].push(lesson)
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
