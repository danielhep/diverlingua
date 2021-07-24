<template>
  <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
    <div class="ml-2 mt-4 flex-shrink-0 flex" />
    <div class="mt-4 flex-shrink-0 flex">
      <button
        type="button"
        class="text-gray-700 bg-white hover:bg-gray-50 ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="$emit('save')"
      >
        <span>
          Save
        </span>
        <SaveIcon
          class="ml-2 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { SaveIcon } from '@heroicons/vue/solid'
export default {
  components: { SaveIcon },
  emits: ['save']
}
</script>

<style>

</style>
