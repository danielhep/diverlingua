<template>
  <div class="bg-blue-500 pt-7 pb-7">
    <h1 class="text-4xl text-center main-title font-display pt-color">
      Contact
    </h1>
    <div class="container mx-auto">
      <div
        class="max-w-2xl mx-auto my-10 bg-gray-50 bg-opacity-30 pt-5 pb-5 rounded-3xl shadow-sm"
      >
        <div class="m-7">
          <div class="mb-6">
            <InputField
              :tp="'text'"
              :nm="'name'"
              :iD="'name'"
              :pHolder="'John Doe'"
              :req="true"
            />
          </div>

          <div class="mb-6">
            <InputField
              :tp="'email'"
              :nm="'email'"
              :iD="'email'"
              :pHolder="'E-Mail'"
              :req="true"
            />
          </div>

          <div class="mb-6">
            <InputTextArea
              :rows="5"
              :name="'message'"
              :id="'message'"
              :placeholder="'Your Message'"
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              :req="true"
            ></InputTextArea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import InputField from "../../components/ui/InputField.vue";
import InputTextArea from "../../components/ui/InputTextArea.vue";
export default {
  components: {
    InputField,
    InputTextArea,
  },
};
</script>