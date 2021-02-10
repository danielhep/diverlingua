<template>
  <div class="bg-navbar-bg  text-text-white border-gray-100 border-b-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <img
              class="w-auto h-24"
              src="../assets/logo.svg"
              alt=""
            >
          </a>
        </div>
        <div class="flex items-center justify-end flex-grow lg:w-0">
          <div class="text-xl font-bold mx-4">
            <span v-if="currentUser">Hola, {{ currentUser.email }}</span>
            <span v-else>Sign up today!</span>
          </div>
          <app-dropdown>
            <template #toggler>
              <svg-icon
                type="mdi"
                size="46"
                class="mx-2"
                :path="icons.mdiAccount"
              />
            </template>
            <app-dropdown-list :items="accountOptions" />
          </app-dropdown>
          <svg-icon
            type="mdi"
            size="46"
            class="mx-2 text-text-pink"
            :path="icons.mdiVideo"
          />
          <svg-icon
            type="mdi"
            size="46"
            class="mx-2 "
            :path="icons.mdiMenu"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount, mdiVideo, mdiMenu } from '@mdi/js'
import { ref } from 'vue'
import AppDropdown from './dropdown/AppDropdown.vue'
import AppDropdownList from './dropdown/AppDropdownList.vue'

export default {
  name: 'NavBar',
  components: { SvgIcon, AppDropdown, AppDropdownList },
  setup (props) {
    const currentUser = ref(null)
    firebase.auth().onAuthStateChanged(user => { currentUser.value = user })

    const accountOptions = [
      {
        label: 'Sign out',
        action: () => { firebase.auth().signOut() }
      }
    ]

    return {
      currentUser,
      accountOptions,
      icons: { mdiAccount, mdiVideo, mdiMenu }
    }
  }
}
</script>
