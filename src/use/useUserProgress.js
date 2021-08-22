import { useAuth, useFirestore } from '@vueuse/firebase'
import firebase from 'firebase/app'
import { computed, ref, toRef } from 'vue'

const { user } = useAuth(firebase.auth)

const db = firebase.firestore()

export function useAllUserProgress () {
  const userProgress = useFirestore(db.doc(`user_progress/${user.value.uid}`), { completed_sections: [] })

  return computed(() => {
    if (userProgress.value) {
      return userProgress.value.completed_sections
    } else {
      return []
    }
  })
}

export function useIsSectionCompleted (lessonID, sectionIndex) {
  const progress = useAllUserProgress()
  return computed(() => progress.value.includes(`${lessonID}_${props.section.index}`))
}
