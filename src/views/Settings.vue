<template>
  <div class="flex justify-center w-full">
    <div class="bg-gray-700 rounded-lg shadow-md mt-6 w-4/5 flex">
      <div class="py-6 pl-6 pr-3 flex-grow">
        <component :is="selectedView" />
      </div>
      <div class="py-6 pr-6 pl-3 border-l border-gray-100">
        <ul>
          <li
            @click="selectedViewName = 'account'"
            :class="{active: (selectedViewName === 'account')}"
          >
            Account Settings
          </li>
          <li>Profile</li>
          <li>Notifications</li>
          <li>Payment</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import GenAccount from '../components/settings/AccountSettings.vue'
import { computed, ref } from 'vue'
export default {
  setup () {
    const selectedViewName = ref('account')
    const selectedView = computed(() => {
      if (selectedViewName.value === 'account') {
        return GenAccount
      } else {
        return GenAccount
      }
    })

    return {
      selectedView,
      selectedViewName
    }
  }
}
</script>

<style scoped>
li {
  @apply py-2 px-2 my-1 hover:bg-gray-800 rounded cursor-pointer;
}

li.active {
  @apply bg-gray-800;
}
</style>
