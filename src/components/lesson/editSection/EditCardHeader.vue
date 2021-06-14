
<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white px-4 py-5 sm:px-6 text-black">
    <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap w-full">
      <div class="ml-4 mt-4 w-full">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div>
              <label
                for="type"
                class="block text-sm font-medium text-gray-700"
              >Section Type</label>
              <select
                id="type"
                name="type"
                v-model="editableSection.type"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option
                  v-for="type in lessonTypes"
                  :key="type.type"
                  :value="type.type"
                >
                  {{ type.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="ml-4 w-full">
            <div>
              <label
                for="title"
                class="block text-sm font-medium text-gray-700"
              >Title</label>
              <div class="mt-1">
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Section Title"
                  v-model="editableSection.title"
                >
              </div>
            </div>
            <div>
              <label
                for="description"
                class="block text-sm font-medium text-gray-700"
              >Description</label>
              <div class="mt-1">
                <input
                  type="text"
                  name="description"
                  id="description"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Section Description"
                  v-model="editableSection.description"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import lessonTypes from '../lessonTypes'
import firebase from 'firebase'

const db = firebase.firestore()

export default {
  props: ['section'],
  emits: ['update:section'],
  setup (props, context) {
    const editableSection = ref(props.section)
    watchEffect(() => {
      context.emit('update:section', editableSection)
    })

    return { editableSection, lessonTypes }
  }
}
</script>
