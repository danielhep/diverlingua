<template>
  <div class="bg-blue-500 text-center pt-4 pb-4">
    <h1 class="text-4xl main-title font-display pt-color">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>