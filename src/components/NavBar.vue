<template>
  <div class="bg-navbar-bg  text-text-white border-gray-100 border-b-2">
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
          <div class="text-xl font-display mx-4">
            <span v-if="user">¡Hola, {{ user.email }}!</span>
            <span
              v-else
              class="cursor-pointer"
              @click="showLoginModal = true"
            >Sign Up / Sign In</span>
          </div>
        </div>
        <div class="flex items-center justify-evenly flex-grow lg:w-0">
          <app-dropdown>
            <template #toggler>
              <div class="flex flex-row items-center font-display uppercase text-gray-300 mr-5">
                <svg-icon
                  type="mdi"
                  :size="46"
                  class="mx-2"
                  :path="icons.mdiAccount"
                />
                User
              </div>
            </template>
            <app-dropdown-list :items="accountOptions" />
          </app-dropdown>
          <div class="flex flex-row items-center font-display uppercase text-gray-300">
            <svg-icon
              type="mdi"
              :size="46"
              class="mx-2 text-text-pink"
              :path="icons.mdiVideo"
            />
            Schedule
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
import { mdiAccount, mdiVideo, mdiMenu } from '@mdi/js'
import { ref } from 'vue'
import AppDropdown from './dropdown/AppDropdown.vue'
import AppDropdownList from './dropdown/AppDropdownList.vue'
import LoginModal from './users/LoginModal.vue'

export default {
  name: 'NavBar',
  components: { SvgIcon, AppDropdown, AppDropdownList, LoginModal },
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
      accountOptions,
      icons: { mdiAccount, mdiVideo, mdiMenu }
    }
  }
}
</script>
