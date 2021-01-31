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
            Hola, Daniel
          </div>
          <svg-icon
            type="mdi"
            size="46"
            class="mx-2"
            :path="icons.mdiAccount"
          />
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
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount, mdiVideo, mdiMenu } from '@mdi/js'

export default {
  name: 'NavBar',
  components: { SvgIcon },
  setup (props) {
    return {
      icons: { mdiAccount, mdiVideo, mdiMenu }
    }
  }
}
</script>
