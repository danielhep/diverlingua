<template>
  <iframe
    :src="`https://www.youtube.com/embed/${section.videoId}?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`"
    allowfullscreen
    allowtransparency
    allow="autoplay"
    class="w-full"
  />
</template>

<script>
export default {
  props: ['section']
}
</script>

<style>
.plyr {
  width: 100%;
}
</style>
