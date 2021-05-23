<template>
  <div class="hero">
    <div class="hero-t_text">
      <h3 class="text-4xl main-title font-display pt-color">
        {{ mainText }} <br />
        {{ subText }}
      </h3>
    </div>

    <div class="hero-b_text text-center">
      <h5 class="sech-title text-3xl font-display st-color">
        {{ secText }} <br />
        {{ secSubText }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainText: "more Than 580 million",
      subText: "people speak Spanish",
      secText: "New experiences and opportunities",
      secSubText: "wait for you",
    };
  },
};
</script>


<style lang="css">
.hero {
  background: url("/images/dark-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  width: 100%;
  /* height: 90vh; */
  padding: 450px 0px;
  position: relative;
}

.hero-t_text {
  position: absolute;
  right: 15rem;
  top: 10rem;
}

.hero-b_text {
  position: absolute;
  bottom: 6rem;
  left: 0;
  width: 100%;
}
</style>