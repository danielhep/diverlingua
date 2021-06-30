import { VideoCameraIcon, DocumentTextIcon } from '@heroicons/vue/outline'
import EditVideo from './editSection/EditVideo.vue'
import ViewVideo from './lessonTypes/ViewVideo.vue'

import ViewReading from './lessonTypes/ViewReading.vue'
export default [
  {
    type: 'video',
    name: 'Video',
    icon: VideoCameraIcon,
    editComponent: EditVideo,
    viewComponent: ViewVideo
  },
  {
    type: 'reading',
    name: 'Reading',
    icon: DocumentTextIcon,
    viewComponent: ViewReading
  }
]
