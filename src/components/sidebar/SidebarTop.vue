<template>
  <div class="flex flex-col items-center">
    <ul class="self-stretch text-text-blue border-b-2 py-2 border-text-blue flex-1 space-y-1">
      <li
        v-for="item in buttons"
        :key="item.name"
        class="flex items-center py-2 text-sm bg-gray-900 font-medium rounded-md cursor-pointer text-indigo-100 hover:bg-opacity-75"
      >
        <svg-icon
          type="mdi"
          :size="42"
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
