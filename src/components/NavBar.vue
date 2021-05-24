<template>
  <div class="bg-navbar-bg  text-text-white border-gray-100 border-b-2 h-24">
    <login-modal
      v-if="showLoginModal"
      @close="showLoginModal = false"
    />
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center md:justify-start md:space-x-10">
        <div class="flex justify-start items-center flex-shrink">
          <a href="#">
            <img
              class="w-auto h-24"
              src="../assets/logo.svg"
              alt=""
            >
          </a>
        </div>
        <div
          class="flex items-center justify-evenly flex-grow lg:w-0"
          v-if="isAuthenticated"
        >
          <div
            class="flex flex-row items-center font-display uppercase text-gray-300 cursor-pointer px-3 py-2 hover:bg-black bg-opacity-30 rounded-lg"
            @click="router.push('lessons')"
          >
            <svg-icon
              type="mdi"
              :size="46"
              class="mr-2 text-text-pink"
              :path="icons.mdiChairSchool"
            />
            Lessons
          </div>
          <user-menu-dropdown />
          <div class="flex flex-row items-center font-display uppercase text-gray-300  px-3 py-2 hover:bg-black bg-opacity-30 rounded-lg">
            <svg-icon
              type="mdi"
              :size="46"
              class="mr-2 text-text-pink"
              :path="icons.mdiVideo"
            />
            Schedule
          </div>
        </div>
        <div class="flex justify-start items-center flex-shrink px-3 py-2 hover:bg-black bg-opacity-30 rounded-lg">
          <div class="text-xl font-display">
            <span v-if="user">¡Hola, {{ user.displayName }}!</span>
            <span
              v-else
              class="cursor-pointer"
              @click="showLoginModal = true"
            >Sign Up / Sign In</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import SvgIcon from '@jamescoyle/vue-icon'
import { useAuth } from '@vueuse/firebase'
import { mdiAccount, mdiVideo, mdiMenu, mdiChairSchool } from '@mdi/js'
import { ref } from 'vue'
import LoginModal from './users/LoginModal.vue'
import UserMenuDropdown from './dropdown/UserMenuDropdown.vue'
import router from '../router'

export default {
  name: 'NavBar',
  components: {
    SvgIcon,
    LoginModal,
    UserMenuDropdown
  },
  setup (props) {
    const showLoginModal = ref(false)

    const { isAuthenticated, user } = useAuth()

    const accountOptions = [
      {
        label: 'Sign out',
        action: () => { firebase.auth().signOut() }
      }
    ]

    return {
      showLoginModal,
      user,
      isAuthenticated,
      accountOptions,
      router,
      icons: { mdiAccount, mdiVideo, mdiMenu, mdiChairSchool }
    }
  }
}
</script>
