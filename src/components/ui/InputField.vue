<template>
  <input
    :type="tp"
    :name="nm"
    :id="iD"
    :placeholder="pHolder"
    :required="req ? required : ''"
    class="placeholder-blue-400 placeholder-opacity-50 w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
  />
</template>

<script>
export default {
  props: {
    tp: String,
    nm: String,
    iD: String,
    pHolder: String,
    req: Boolean,
  },
};
</script>