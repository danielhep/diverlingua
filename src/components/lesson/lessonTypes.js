import { VideoCameraIcon, DocumentTextIcon } from '@heroicons/vue/outline'
import EditVideo from './editSection/EditVideo.vue'
import ViewVideo from './lessonTypes/ViewVideo.vue'
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
    icon: DocumentTextIcon
  }
]
