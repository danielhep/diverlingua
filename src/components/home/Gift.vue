<template>
  <div class="gift">
    <div class="notice-part">
      <h2 class="g-notice-text font-display">
        <span>{{ mainTxt }}</span> {{ thinTxt }}
      </h2>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      mainTxt: "We give you a pronunciation course",
      thinTxt: "for completing 2 levels in Diverlingua",
    };
  },
};
</script>


<style lang="css">
.gift {
  background: #ffffff;
  padding: 100px 0px 50px;
}

.notice-part {
  position: relative;
  padding: 0px 0px 100px 260px;
  border-bottom: 2px solid red;
}

.notice-part::after {
  content: url("/images/gift.svg");
  position: absolute;
  right: 20rem;
  bottom: 0;
  width: 155px;
  height: 152px;
}

.g-notice-text {
  font-size: 2.3rem;
  line-height: 1.3;
  color: #ff3366;
  max-width: 582px;
}

.g-notice-text span {
  font-weight: 600;
}
</style>