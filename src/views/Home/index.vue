<template>
  <div class="home">
    <HomeHero />
    <Gift />
    <ShortBanner :title="bTitle_two" />
    <Price />
    <ShortBanner :title="bTitle_one" />
    <StartCourse />
    <ContactUs />
    <FollowUs />
    <CopyRight />
  </div>
</template>

<script>
import HomeHero from "../../components/home/HomeHero.vue";
import Gift from "../../components/home/Gift.vue";
import Price from "../../components/home/Price.vue";
import ShortBanner from "../../components/home/ShortBanner.vue";
import StartCourse from "../../components/home/StartCourse.vue";
import ContactUs from "../../components/home/ContactUs.vue";
import FollowUs from "../../components/home/FollowUs.vue";
import CopyRight from "../../components/ui/CopyRight.vue";
export default {
  components: {
    HomeHero,
    Gift,
    Price,
    ShortBanner,
    StartCourse,
    ContactUs,
    FollowUs,
    CopyRight,
  },

  data() {
    return {
      bTitle_one: "You can have the introductory level for Free",
      bTitle_two: "Plans and Prices",
    };
  },
};
</script>

<style lang="css">
</style>