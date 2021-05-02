<template>
  <login-dialog
    v-if="showLoginModal"
    :reauth="true"
  />
  <div class="space-y-6">
    <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 text-black">
      <alert-box
        :messages="Object.values(errors)"
        type="error"
      />
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="flex flex-col md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Account Settings
          </h3>
          <p class="mt-1 text-sm text-gray-500 flex-grow">
            n/a
          </p>
          <button
            type="button"
            class="mb-3 w-full inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="save()"
          >
            Save
          </button>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form
            class="space-y-6"
            action="#"
            method="POST"
          >
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="company_website"
                  class="block text-sm font-medium text-gray-700"
                >
                  Display Name
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="displayName"
                    id="displayName"
                    v-model="displayName"
                    @blur="validate('name')"
                    class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                    placeholder="Miguel F"
                  >
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  This will be your public facing name for classes.
                </p>
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div class="mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  v-model="email"
                  @blur="validate('email')"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                >
              </div>
            </div>

            <div>
              <div class="mt-1 flex flex-col justify-center px-3 py-3 border-2 border-gray-300 border-dashed rounded-md">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <div class="my-1">
                  <input
                    type="password"
                    id="email"
                    name="email"
                    v-model="newpass"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                </div>
                <label
                  for="passwordconfirm"
                  class="block text-sm font-medium text-gray-700"
                >
                  Confirm New Password
                </label>
                <div class="mt-1">
                  <input
                    type="password"
                    name="passwordconfirm"
                    v-model="newpassconfirm"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'firebase/firestore'
import firebase from 'firebase'
import { useAuth } from '@vueuse/firebase'
import { computed, ref } from 'vue'
import AlertBox from '../misc/AlertBox.vue'
import LoginDialog from '../users/LoginModal.vue'
const db = firebase.firestore()

function emailIsValid (email) {
  return /\S+@\S+\.\S+/.test(email)
}

export default {
  components: { AlertBox, LoginDialog },
  setup () {
    const { user } = useAuth()
    const displayName = ref(user.value.displayName)
    const email = ref(user.value.email)
    const newpass = ref('')
    const newpassconfirm = ref('')
    const errors = ref({
    })

    const edited = ref({
      email: computed(() => email.value !== user.value.email),
      password: computed(() => !!(newpass.value.length || newpassconfirm.value.length)),
      displayName: computed(() => displayName.value !== user.value.displayName)
    })

    const validate = (field) => {
      switch (field) {
        case 'email':
          if (!emailIsValid(email.value) && edited.value.email) {
            errors.value.email = "That doesn't look like a valid email address."
          } else {
            delete errors.value.email
          }
          break
        case 'name':
          if (!displayName.value.length) {
            errors.value.name = 'Hm, looks like you forgot to enter a display name.'
          } else {
            delete errors.value.name
          }
          break
        default:
          break
      }
    }

    const showLoginModal = ref(false)

    const save = async () => {
      if (edited.value.displayName) {
        await user.value.updateProfile({ displayName: displayName.value })
      }
      if (edited.value.email) {
        try {
          await user.value.updateEmail(email.value)
        } catch (e) {
          if (e.code === 'auth/invalid-email') {
            errors.value.email = 'You entered an invalid email address.'
          } else if (e.code === 'auth/email-already-in-use') {
            errors.value.email = 'That email is already in use.'
          } else if (e.code === 'auth/requires-recent-login') {
            showLoginModal.value = true
          }
          // TODO: Error handling
        }
      }
      if (edited.value.password) {
        try {
          await user.value.updatePassword(newpass)
        } catch (e) {
          // TODO: Error handling
        }
      }
    }

    return {
      displayName, email, save, newpass, newpassconfirm, edited, validate, errors, showLoginModal
    }
  }

}
</script>
