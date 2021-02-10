<template>
  <div class="bg-text-blue py-4 rounded text-black">
    <ul>
      <li
        class="whitespace-nowrap px-2 hover:bg-text-purple cursor-pointer"
        :key="item.label"
        v-for="item in items"
        @click="item.action"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['items']
}
</script>
