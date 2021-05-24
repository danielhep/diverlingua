<template>
  <div class="flex flex-col items-center">
    <ul class="self-stretch px-2 text-text-blue  flex-1 space-y-1 py-2">
      <li
        v-for="item in buttons"
        :key="item.name"
        class="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
      >
        <svg-icon
          type="mdi"
          :size="38"
          class="mx-2"
          :path="item.icon"
        />
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiEye, mdiChevronRight, mdiChevronLeft } from '@mdi/js'

export default {
  components: { SvgIcon },
  setup (props) {
    return {
      buttons: [
        { icon: mdiEye, name: 'Ver todo' },
        { icon: mdiChevronRight, name: 'Siguiente' },
        { icon: mdiChevronLeft, name: 'Anterior' }
      ]
    }
  }
}
</script>
<style scoped>
.circle
    {
    width: 8rem;
    height: 8rem;
    border-radius:250px;
    font-size:35px;
    color:#fff;
    line-height:8rem;
    text-align:center;
    }
</style>
