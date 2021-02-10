<template>
  <div
    @click="toggle"
    v-click-away="away"
    class="relative"
  >
    <slot name="toggler">
      <button>Toggle</button>
    </slot>
    <div
      v-if="active"
      class="absolute"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { directive } from 'vue3-click-away'
export default {
  name: 'AppDropdown',
  directives: {
    ClickAway: directive
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggle () {
      this.active = !this.active
    },
    away () {
      this.active = false
    }
  }
}
</script>
