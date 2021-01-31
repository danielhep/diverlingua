<template>
  <div class="flex flex-col items-center">
    <ul class="w-full text-text-blue border-b-2 py-2 border-text-blue">
      <li
        v-for="item in buttons"
        :key="item.name"
        class="flex hover:bg-sidebar-bglight items-center pl-2 cursor-pointer py-1 w-full"
      >
        <svg-icon
          type="mdi"
          size="42"
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
import { mdiEye, mdiRocketLaunchOutline, mdiForum, mdiChevronRight, mdiChevronLeft } from '@mdi/js'

export default {
  components: { SvgIcon },
  setup (props) {
    return {
      buttons: [
        { icon: mdiEye, name: 'Ver todo' },
        { icon: mdiRocketLaunchOutline, name: 'Gramática' },
        { icon: mdiForum, name: 'Vocabulario' },
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
