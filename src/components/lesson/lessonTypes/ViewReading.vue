<template>
  <div
    v-html="compiledMd"
    id="sectionBody"
    class="text-black text-left w-full relative"
  />
</template>

<script>
import marked from 'marked'
import { computed } from 'vue'
export default {
  props: ['section'],
  setup (props) {
    const compiledMd = computed(() => marked(props.section.md, {
      smartypants: true
    }))
    return { compiledMd }
  }
}
</script>

<style>
#sectionBody h1 {
  @apply mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl;
}

#sectionBody p {
  @apply mt-6 text-gray-500 mx-auto;
}

#sectionBody h2 {
  color: #111827;
  font-weight: 600;
  font-size: 1.25em;
  margin-top: 1.6em;
  margin-bottom: .6em;
  line-height: 1.6;
}

#sectionBody ul, ol {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}

#sectionBody ul > li{
  padding-left: 1.6666667em;
  position: relative;
}
#sectionBody ul > li::before{
  content: "";
  position: absolute;
  background-color: black;
  border-radius: 50%;
  width: .375em;
  height: .375em;
  top: calc(.875em - .1875em);
  left: .25em;
}

#sectionBody ol > li {
  margin-top: .8em;
}

#sectionBody ol > li::before {
  content: counter(list-item,var(--list-counter-style,decimal)) ".";
  font-weight: 400;
  color: #6b7280;
  margin-right: 1em;
}
</style>
