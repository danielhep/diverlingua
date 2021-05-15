<template>
  <div class="home">
    <HomeHero />
    <Gift />
  </div>
</template>

<script>
import HomeHero from "../../components/home/HomeHero.vue";
import Gift from "../../components/home/Gift.vue";
export default {
  components: {
    HomeHero,
    Gift,
  },
};
</script>

<style lang="css">
</style>