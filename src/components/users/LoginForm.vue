<template>
  <div v-if="loading">
    <div class="loader">Loading...</div>
  </div>
  <form class="w-4/12 flex flex-col" v-else @submit.prevent="signIn()">
    <alert-box type="alert" :messages="Object.values(warnings)" />
    <alert-box type="error" :messages="Object.values(errors)" />
    <label for="uname" class="font-semibold mt-1">Email</label>
    <input
      type="text"
      placeholder="Enter Email"
      class="
        outline-none
        inline-block
        rounded-xl
        my-1
        p-2
        text-black
        bg-gray-100
        shadow-md
        border-transparent border-2
        focus:bg-white
        focus:border-gray-400
      "
      name="uname"
      autofocus
      v-model="email"
      required
    />

    <label for="psw" class="font-semibold mt-1">Password</label>
    <input
      type="password"
      class="
        outline-none
        inline-block
        rounded-xl
        my-1
        p-2
        text-black
        bg-gray-100
        shadow-md
        border-transparent border-2
        focus:bg-white
        focus:border-gray-400
      "
      placeholder="Enter Password"
      v-model="password"
      name="psw"
      required
    />
    <div class="grid grid-cols-12 gap-2">
      <button
        @click="closeModal"
        class="
          bg-lightGreen
          rounded-xl
          py-1
          font-bold
          mt-1
          flex-grow
          col-span-8
          shadow-md
          text-center
        "
      >
        Sign Up
      </button>
      <button
        type="submit"
        class="
          bg-blue-500
          rounded-xl
          py-1
          font-bold
          mt-1
          flex-grow
          col-span-4
          shadow-md
        "
        @click.prevent="signIn()"
      >
        Log In
      </button>
    </div>

    <span
      class="my-2 text-right"
      style="cursor: pointer"
      @click="forgetPassword"
    >
      Forgot <a href="#" style="color: #a6ffca">password?</a>
    </span>

    <div class="grid grid-cols-2 gap-2">
      <google-button @click="signInWithGoogle()" class="col-span-1" />
      <facebook-button class="col-span-1" />
    </div>
  </form>
</template>

<script>
import { ref, toRef } from "vue";
import router from "../../router";
import GoogleButton from "../misc/googleSignIn.vue";
import FacebookButton from "../misc/facebookSignIn.vue";
import AlertBox from "../misc/AlertBox.vue";
import firebase from "firebase";

export default {
  components: { GoogleButton, FacebookButton, AlertBox },
  props: { reauth: Boolean },
  data() {
    return {
      hide: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit("loggedIn");
      this.$router.push({ name: "signup" });
    },
  },
  emits: ["loggedIn"],
  setup(props, context) {
    const email = ref();
    const password = ref();
    const errors = ref({});
    const warnings = ref({});
    const loading = ref(false);
    const reauth = toRef(props, "reauth");

    console.log(reauth.value);
    if (reauth.value) {
      warnings.value.reauth = "Please reauthorize your account.";
    }

    const useSignIn = async (credential) => {
      try {
        loading.value = true;
        await firebase.auth().signInWithCredential(credential);
        context.emit("loggedIn");
        router.push("lessons");
      } catch (e) {
        if (e.code === "auth/wrong-password") {
          errors.value.authError = "Incorrect password";
        } else if (e.code === "auth/invalid-email") {
          errors.value.authError = "That doesn't look like an email address.";
        } else if (e.code === "auth/user-not-found") {
          errors.value.authError =
            "No account found with that email. Make an account?"; // TODO: Make account?
        } else if (e.code === "auth/user-disabled") {
          errors.value.authError = "Your account is disabled.";
        }
      } finally {
        loading.value = false;
      }
    };

    const signIn = () => {
      const cred = firebase.auth.EmailAuthProvider.credential(
        email.value,
        password.value
      );
      useSignIn(cred);
    };

    const signInWithGoogle = async () => {
      loading.value = true;
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/calendar.events");
      provider.addScope("https://www.googleapis.com/auth/userinfo.email");
      try {
        const createUser = await firebase.auth().signInWithPopup(provider);
        const result = await createUser;
        // await firebase
        //   .firestore()
        //   .collection("user_data")
        //   .add({ uid: result.user.uid });
        sessionStorage.setItem("userId", result.user.uid);
        context.emit("loggedIn");
        router.push("userinfo");
      } catch {
        // TODO: Handle errors
      } finally {
        loading.value = false;
      }
    };

    const forgetPassword = () => {
      context.emit("loggedIn");
      router.push("forgetpassword");
    };

    return {
      signInWithGoogle,
      signIn,
      errors,
      warnings,
      email,
      password,
      loading,
      forgetPassword,
    };
  },
};
</script>
