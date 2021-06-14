<template>
  <vue-plyr class="w-full">
    <div
      data-plyr-provider="youtube"
      :data-plyr-embed-id="section.videoId"
      class="w-full"
    />
  </vue-plyr>
  <!-- <div
    class="plyr__video-embed"
    id="sectionVideoPlayer"
  >
    <iframe
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/IMTYzQd9FUY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div> -->
  <!-- <div
    id="sectionVideoPlayer"
  /> -->
</template>

<script>
import { onMounted, toRef, watchEffect } from 'vue'
export default {
  props: ['section'],
  setup (props) {
    // const section = toRef(props, 'section')
    onMounted(() => {
      // const player = new Plyr('#sectionVideoPlayer')
    })
  }
}
</script>

<style>
.plyr {
  width: 100%;
}
</style>
