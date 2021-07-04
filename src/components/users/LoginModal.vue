<template>
  <!-- The Modal -->
  <div
    id="getmod"
    class="
      fixed
      z-10
      inset-0
      overflow-auto
      bg-opacity-50 bg-black
      flex
      items-center
      justify-center
      font-display
    "
  >
    <!-- Modal Content -->

    <div
      class="
        relative
        flex
        items-center
        justify-center
        bg-login-background bg-cover bg-right-top
        rounded-xl
        w-login-modal-w
        h-login-modal-h
        shadow-lg
      "
      ref="modalRef"
    >
      <img
        class="absolute top-0 left-0 w-4 m-4 opacity-70 cursor-pointer"
        :src="times"
        @click="$emit('close')"
      />
      <login-form @loggedIn="$emit('close')" :reauth="reauth" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import LoginForm from "./LoginForm.vue";

export default {
  components: { LoginForm },
  emits: ["close"],
  props: ["reauth"],
  setup(props, context) {
    const modalRef = ref(null);

    onClickOutside(modalRef, () => {
      context.emit("close");
    });

    return { modalRef };
  },
};
</script>

<style scoped>
</style>
