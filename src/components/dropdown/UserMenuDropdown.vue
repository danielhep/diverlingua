<template>
  <Menu
    as="div"
    class="relative text-black"
  >
    <MenuButton class="flex flex-row items-center h-full font-display uppercase text-gray-300 rounded-lg mr-5 px-3 py-2 hover:bg-black bg-opacity-30 rounded-lg0">
      <svg-icon
        type="mdi"
        :size="46"
        class="mr-2"
        :path="icons.mdiAccount"
      />
      User
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
      >
        <div class="px-4 py-3">
          <p class="text-sm leading-5">
            Signed in as
          </p>
          <p class="text-sm font-medium leading-5 text-gray-900 truncate">
            {{ user.email }}
          </p>
        </div>
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a
              href="#account-settings"
              :class="
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              "
              class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#account-settings"
              :class="
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              "
              class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
              @click="signOut()"
            >
              Sign Out
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { useAuth } from '@vueuse/firebase'

import { mdiAccount, mdiVideo, mdiMenu } from '@mdi/js'
import firebase from 'firebase/app'
import router from '../../router'

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    SvgIcon
  },
  setup () {
    const { isAuthenticated, user } = useAuth()
    return {
      user,
      signOut () {
        firebase.auth().signOut()
        router.push('home')
      },
      icons: { mdiAccount, mdiVideo, mdiMenu }
    }
  }
}
</script>
