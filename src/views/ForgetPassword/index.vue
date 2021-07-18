<template>
  <div class="forgetpassword">
    <Modal
      v-if="modalActive"
      :modal-message="modalMessage"
      @close-modal="closeModal"
    />
    <Loading v-if="loading" />

    <div class="fp-wrap pt-20 pb-7">
      <h1
        class="
          text-4xl text-center
          main-title
          font-display
          pt-color
          font-bold
          mb-10
        "
      >
        Forget Password
      </h1>

      <div class="container mx-auto">
        <div
          class="
            bg-gray-50
            max-w-lg
            mx-auto
            my-10
            mt-0
            bg-opacity-50
            px-8
            py-4
            rounded-3xl
            shadow-sm
          "
        >
          <form
            class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div class="sm:col-span-2">
              <div class="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="organization"
                  placeholder="E-mail"
                  class="
                    block
                    text-black
                    w-full
                    shadow-sm
                    sm:text-sm
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    border-gray-300
                    rounded-3xl
                    placeholder-gray-500 placeholder-opacity-50
                  "
                  v-model="email"
                >
              </div>
            </div>

            <div
              v-show="error"
              class="error"
            >
              {{ this.errorMsg }}
            </div>

            <div class="text-center sm:col-span-2">
              <button
                type="submit"
                @click.prevent="resetPassword"
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
                Start
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Modal from '../../components/forgetpassword/Modal.vue'
import Loading from '../../components/ui/Loading.vue'

export default {
  name: 'ForgetPassword',
  data () {
    return {
      email: '',
      modalActive: false,
      modalMessage: '',
      loading: null
    }
  },

  components: {
    Modal,
    Loading
  },

  methods: {
    resetPassword () {
      this.loading = true
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage =
            'If your account exists, you will receive an email!'
          this.loading = false
          this.modalActive = true
        })
        .catch((err) => {
          // console.log(err.message);
          this.modalMessage = err.message
          this.loading = false
          this.modalActive = true
        })
    },

    closeModal () {
      this.modalActive = !this.modalActive
      this.email = ''
    }
  }
}
</script>
