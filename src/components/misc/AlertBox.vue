<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="rounded-md p-4"
    :class="{'bg-red-50': type==='error', 'bg-yellow-50': type==='alert'}"
    v-if="messages.length"
  >
    <div class="flex">
      <div class="flex-shrink-0">
        <XCircleIcon
          class="h-5 w-5 text-red-400"
          aria-hidden="true"
          v-if="type==='error'"
        />
        <ExclamationIcon
          class="h-5 w-5 text-yellow-400"
          aria-hidden="true"
          v-if="type==='alert'"
        />
      </div>
      <div class="ml-3">
        <h3
          class="text-sm font-medium text-red-800 mb-2"
          v-if="messages.length > 1"
        >
          There were {{ messages.length }} errors with your submission
        </h3>

        <!-- <h3
          class="text-sm font-medium text-red-800"
          v-else
        >
          There was an error with your submission
        </h3> -->
        <div class="text-sm text-red-700">
          <ul class="list-disc pl-5 space-y-1">
            <li
              v-for="message in messages"
              :key="message"
            >
              {{ message }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XCircleIcon } from '@heroicons/vue/solid'

export default {
  props: ['messages', 'type'],
  components: {
    XCircleIcon
  }
}
</script>
