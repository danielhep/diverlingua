<template>
  <div class="flex items-center mb-8 pl-8">
    <h3 class="text-xl font-bold font-display flex-grow">
      Account Settings
    </h3>
    <button
      class="bg-blue-500 rounded-xl py-1 font-bold mt-1 shadow-md h-10 px-6 mx-10"
      @click.prevent="save()"
    >
      Save
    </button>
  </div>
  <div class="grid grid-cols-12 items-center mx-2 text-right">
    <label
      for="uname"
      class="font-semibold mr-2"
    >Display Name</label>
    <input
      type="text"
      placeholder="First and Last Name"
      class="input-text"
      name="uname"
      autofocus
      v-model="displayName"
      required
    >

    <label
      for="email"
      class="font-semibold mr-2"
    >Email</label>
    <input
      type="text"
      placeholder="Email"
      class="input-text"
      name="email"
      autofocus
      v-model="email"
      required
    >

    <div class="mt-2 py-2 grid grid-cols-12 col-span-10 col-start-2 border-gray-400 rounded-lg border items-center">
      <label
        for="uname"
        class="font-semibold mr-2"
      >Current Password</label>
      <input
        type="text"
        class="input-text"
        name="uname"
        autofocus
        v-model="name"
        required
      >
      <label
        for="uname"
        class="font-semibold mr-2"
      >New Password</label>
      <input
        type="text"
        class="input-text"
        name="uname"
        autofocus
        v-model="name"
        required
      >
      <label
        for="uname"
        class="font-semibold mr-2"
      >New Password Confirm</label>
      <input
        type="text"
        class="input-text"
        name="uname"
        autofocus
        v-model="name"
        required
      >
    </div>
  </div>
</template>

<script>
import 'firebase/firestore'
import firebase from 'firebase'
import { useAuth } from '@vueuse/firebase'
import { computed, ref } from 'vue'
const db = firebase.firestore()

export default {
  setup () {
    const { user } = useAuth()
    const displayName = ref(user.value.displayName)
    const email = ref(user.value.email)

    const edited = ref({
      email: computed(() => email.value !== user.value.email),
      password: false,
      displayName: computed(() => displayName.value !== user.value.displayName)
    })

    const save = async () => {
      if (edited.value.displayName) {
        await user.value.updateProfile({ displayName: displayName.value })
      }
    }

    return {
      displayName, email, save
    }
  }

}
</script>

<style scoped>
  label {
    @apply col-span-4
  }
  input {
    @apply col-span-8 mx-8;
  }
</style>
