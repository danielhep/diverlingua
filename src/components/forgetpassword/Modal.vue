<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block
        sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="
          inline-block
          align-bottom
          bg-white
          rounded-lg
          px-4
          pt-5
          pb-4
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8
          sm:align-middle
          sm:max-w-sm
          sm:w-full
          sm:p-6
        "
      >
        <div>
          <!-- <div
            class="
              mx-auto
              flex
              items-center
              justify-center
              h-12
              w-12
              rounded-full
              bg-green-100
            "
          >
            <svg
              class="h-6 w-6 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div> -->
          <div class="mt-3 text-center sm:mt-5">
            <h3
              class="text-lg leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              {{ modalMessage }}
            </h3>
            <!-- <div class="mt-2">
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur amet labore.
              </p>
            </div> -->
          </div>
        </div>
        <div class="mt-5 sm:mt-6 text-center">
          <button
            type="button"
            @click="closeModal"
            class="
              inline-flex
              justify-center
              py-1
              px-8
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-3xl
              text-white
              bg-lightGreen
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["modalMessage"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
      // console.log("Modal :", this.modalMessage);
    },
  },
};
</script>


<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
}
.modal .modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  width: 300px;
  padding: 40px 30px;
  background-color: #fff;
}
.modal .modal-content p {
  text-align: center;
}
.modal .modal-content button {
  align-self: center;
}
</style>