<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 w-8/12">
    <lesson-card-header :section="section" />
    <div class="px-4 py-5 sm:p-6 flex justify-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/IMTYzQd9FUY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="px-4 py-4 sm:px-6">
      <!-- Content goes here -->
      <!-- We use less vertical padding on card footers at all sizes than on headers or body sections -->
    </div>
  </div>
</template>

<script>
import LessonCardHeader from './LessonCardHeader.vue'

export default {
  props: ['section'],
  components: { LessonCardHeader }
}
</script>
