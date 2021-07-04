<template>
  <div class="signup">
    <div class="bg-signup pt-20 pb-7">
      <h1
        class="
          text-4xl text-center
          main-title
          font-display
          pt-color
          font-bold
          mb-2
        "
      >
        You Are LoggedIn By Google
      </h1>
      <h1
        class="
          text-4xl text-center
          main-title
          font-display
          pt-color
          font-bold
          mb-10
        "
      >
        Please Fill Up The Necessary Information
      </h1>
      <div class="container mx-auto">
        <div
          class="
            max-w-2xl
            bg-gray-50
            mx-auto
            my-10
            mt-0
            bg-opacity-50
            px-10
            py-5
            rounded-3xl
            shadow-sm
          "
        >
          <form
            action="#"
            method="POST"
            class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <div class="mt-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  placeholder="First Name"
                  class="
                    text-black
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    border-gray-300
                    rounded-3xl
                    placeholder-gray-500 placeholder-opacity-50
                  "
                  v-model="firstName"
                />
              </div>
            </div>

            <div>
              <div class="mt-1">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autocomplete="family-name"
                  placeholder="Last Name"
                  class="
                    block
                    text-black
                    w-full
                    shadow-sm
                    sm:text-sm
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    border-gray-300
                    rounded-3xl
                    placeholder-gray-500 placeholder-opacity-50
                  "
                  v-model="lastName"
                />
              </div>
            </div>

            <div>
              <div class="mt-1">
                <input
                  type="text"
                  name="country"
                  id="country"
                  autocomplete="given-name"
                  placeholder="Country"
                  class="
                    block
                    text-black
                    w-full
                    shadow-sm
                    sm:text-sm
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    border-gray-300
                    rounded-3xl
                    placeholder-gray-500 placeholder-opacity-50
                  "
                  v-model="country"
                />
              </div>
            </div>

            <div>
              <div class="mt-1">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autocomplete="family-name"
                  placeholder="City"
                  class="
                    block
                    text-black
                    w-full
                    shadow-sm
                    sm:text-sm
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    border-gray-300
                    rounded-3xl
                    placeholder-gray-500 placeholder-opacity-50
                  "
                  v-model="city"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <div class="mt-1">
                <input
                  id="profession"
                  name="profession"
                  type="text"
                  autocomplete="profession"
                  placeholder="Profession"
                  class="
                    block
                    text-black
                    w-full
                    shadow-sm
                    sm:text-sm
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    border-gray-300
                    rounded-3xl
                    placeholder-gray-500 placeholder-opacity-50
                  "
                  v-model="profession"
                />
              </div>
            </div>

            <!-- <div class="sm:col-span-2">
              <div class="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="organization"
                  placeholder="E-mail"
                  class="
                    block
                    text-black
                    w-full
                    shadow-sm
                    sm:text-sm
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    border-gray-300
                    rounded-3xl
                    placeholder-gray-500 placeholder-opacity-50
                  "
                  v-model="email"
                />
              </div>
            </div> -->

            <!-- <div class="sm:col-span-2">
              <div class="mt-1">
                <input
                  type="text"
                  name="password"
                  id="password"
                  autocomplete="organization"
                  placeholder="Password"
                  class="
                    block
                    text-black
                    w-full
                    shadow-sm
                    sm:text-sm
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    border-gray-300
                    rounded-3xl
                    placeholder-gray-500 placeholder-opacity-50
                  "
                  v-model="password"
                />
              </div>
            </div> -->

            <fieldset class="sm:col-span-2">
              <legend class="block text-base pt-color font-medium">
                Gender
              </legend>
              <div class="mt-4 flex">
                <div class="flex items-center mr-4">
                  <input
                    id="gender-one"
                    name="gender"
                    value="female"
                    type="radio"
                    v-model="gender"
                    class="
                      focus:ring-indigo-500
                      h-4
                      w-4
                      text-indigo-600
                      border-gray-300
                    "
                  />
                  <label for="budget_under_25k" class="ml-3">
                    <span class="block text-sm pt-color">Female</span>
                  </label>
                </div>

                <div class="flex items-center mr-4">
                  <input
                    id="male"
                    name="gender"
                    value="Male"
                    type="radio"
                    v-model="gender"
                    class="
                      focus:ring-indigo-500
                      h-4
                      w-4
                      text-indigo-600
                      border-gray-300
                    "
                  />
                  <label for="budget_25k-50k" class="ml-3">
                    <span class="block text-sm pt-color">Male</span>
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="other"
                    name="gender"
                    value="Other"
                    type="radio"
                    v-model="gender"
                    class="
                      focus:ring-indigo-500
                      h-4
                      w-4
                      text-indigo-600
                      border-gray-300
                    "
                  />
                  <label for="budget_50k-100k" class="ml-3">
                    <span class="block text-sm pt-color">Other</span>
                  </label>
                </div>
              </div>
            </fieldset>

            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label
                  for="phone"
                  class="block text-base pt-color font-medium mb-3"
                  >Date of birth</label
                >
              </div>

              <div class="flex justify-start">
                <div class="mr-3">
                  <div class="mt-1">
                    <input
                      type="text"
                      name="birthday"
                      id="birthday"
                      autocomplete="given-name"
                      placeholder="Day"
                      v-model="birthday"
                      class="
                        block
                        text-black
                        w-full
                        shadow-sm
                        sm:text-sm
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        border-gray-300
                        rounded-3xl
                        placeholder-gray-500 placeholder-opacity-50
                      "
                    />
                  </div>
                </div>

                <div class="mr-3">
                  <div class="mt-1">
                    <input
                      type="text"
                      name="birthmonth"
                      id="birthmonth"
                      autocomplete="family-name"
                      placeholder="Month"
                      v-model="birthmonth"
                      class="
                        block
                        text-black
                        w-full
                        shadow-sm
                        sm:text-sm
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        border-gray-300
                        rounded-3xl
                        placeholder-gray-500 placeholder-opacity-50
                      "
                    />
                  </div>
                </div>

                <div>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="birthyear"
                      id="birthyear"
                      autocomplete="given-name"
                      placeholder="Year"
                      v-model="birthyear"
                      class="
                        block
                        text-black
                        w-full
                        shadow-sm
                        sm:text-sm
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        border-gray-300
                        rounded-3xl
                        placeholder-gray-500 placeholder-opacity-50
                      "
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label
                  for="how_can_we_help"
                  class="block text-base pt-color font-medium mb-3"
                  >Hobbies</label
                >
              </div>
              <div class="mt-1">
                <input
                  type="text"
                  name="hobby"
                  id="hobby"
                  autocomplete="family-name"
                  placeholder="Hobby"
                  v-model="hobby"
                  class="
                    block
                    text-black
                    w-full
                    shadow-sm
                    sm:text-sm
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    border-gray-300
                    rounded-3xl
                    placeholder-gray-500 placeholder-opacity-50
                  "
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="how_did_you_hear_about_us"
                class="block text-base pt-color font-medium mb-3"
                >Why do you want to learn Spanish?</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="learn-spanish"
                  id="learn-spanish"
                  autocomplete="family-name"
                  v-model="learnspanish"
                  class="
                    block
                    text-black
                    w-full
                    shadow-sm
                    sm:text-sm
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    border-gray-300
                    rounded-3xl
                    placeholder-gray-500 placeholder-opacity-50
                  "
                />
              </div>
            </div>

            <fieldset class="sm:col-span-2">
              <legend class="block text-base pt-color font-medium">
                What level of spanish do you think you have ?
              </legend>
              <div class="mt-4 flex">
                <div class="flex items-center mr-4">
                  <input
                    id="none"
                    name="none"
                    value="None"
                    type="radio"
                    v-model="spanishlevel"
                    class="
                      focus:ring-indigo-500
                      h-4
                      w-4
                      text-indigo-600
                      border-gray-300
                    "
                  />
                  <label for="budget_under_25k" class="ml-3">
                    <span class="block text-sm pt-color">None</span>
                  </label>
                </div>

                <div class="flex items-center mr-4">
                  <input
                    id="beginner"
                    name="beginner"
                    value="Beginner"
                    type="radio"
                    v-model="spanishlevel"
                    class="
                      focus:ring-indigo-500
                      h-4
                      w-4
                      text-indigo-600
                      border-gray-300
                    "
                  />
                  <label for="budget_25k-50k" class="ml-3">
                    <span class="block text-sm pt-color">Beginner</span>
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="intermediate"
                    name="intermediate"
                    value="Intermediate"
                    type="radio"
                    v-model="spanishlevel"
                    class="
                      focus:ring-indigo-500
                      h-4
                      w-4
                      text-indigo-600
                      border-gray-300
                    "
                  />
                  <label for="budget_50k-100k" class="ml-3">
                    <span class="block text-sm pt-color">Intermediate</span>
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset class="sm:col-span-2">
              <legend class="block text-base pt-color font-medium">
                How do you want to start?
              </legend>
              <div class="mt-4 flex">
                <div class="flex items-center mr-4">
                  <input
                    id="free-trail"
                    name="free-trail"
                    value="Free Trail"
                    type="radio"
                    v-model="startcourse"
                    class="
                      focus:ring-indigo-500
                      h-4
                      w-4
                      text-indigo-600
                      border-gray-300
                    "
                  />
                  <label for="budget_under_25k" class="ml-3">
                    <span class="block text-sm pt-color">Free Trail</span>
                  </label>
                </div>

                <div class="flex items-center mr-4">
                  <input
                    id="paid-subscription"
                    name="paid-subscription"
                    value="Paid Subscription"
                    type="radio"
                    v-model="startcourse"
                    class="
                      focus:ring-indigo-500
                      h-4
                      w-4
                      text-indigo-600
                      border-gray-300
                    "
                  />
                  <label for="budget_25k-50k" class="ml-3">
                    <span class="block text-sm pt-color"
                      >Paid subscription</span
                    >
                  </label>
                </div>
              </div>
            </fieldset>

            <div v-show="error" class="error">{{ this.errorMsg }}</div>

            <div class="text-center sm:col-span-2 mt-10">
              <button
                type="submit"
                @click.prevent="infoFill"
                class="
                  inline-flex
                  justify-center
                  py-1
                  px-8
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-3xl
                  text-white
                  bg-lightGreen
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                "
              >
                Start
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import { db } from "../../main";

export default {
  name: "UserInfoFill",
  data() {
    return {
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      profession: "",
      // email: "",
      // password: "",
      gender: "",
      birthday: "",
      birthmonth: "",
      birthyear: "",
      hobby: "",
      learnspanish: "",
      spanishlevel: "",
      startcourse: "",
      error: null,
      errorMsg: "",
      userId: "",
    };
  },

  methods: {
    async infoFill() {
      if (
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.country !== "" &&
        this.city !== "" &&
        this.profession !== "" &&
        // this.email !== "" &&
        // this.password !== "" &&
        this.gender !== "" &&
        this.birthday !== "" &&
        this.birthmonth !== "" &&
        this.birthyear !== "" &&
        this.hobby !== "" &&
        this.learnspanish !== "" &&
        this.spanishlevel !== "" &&
        this.startcourse !== ""
      ) {
        // console.log(this.firstName, this.lastName, this.gender);
        this.error = false;
        this.errorMsg = "";

        // const firebaseAuth = await firebase.auth();
        // const createUser = await firebaseAuth.createUserWithEmailAndPassword(
        //   this.email,
        //   this.password
        // );
        // const result = await createUser;
        const dataBase = firebase
          .firestore()
          .collection("user_data")
          .doc(this.userId);
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          country: this.country,
          city: this.city,
          profession: this.profession,
          // email: this.email,
          // password: this.password,
          gender: this.gender,
          birthday: this.birthday,
          birthmonth: this.birthmonth,
          birthyear: this.birthyear,
          hobby: this.hobby,
          learnspanish: this.learnspanish,
          spanishlevel: this.spanishlevel,
          startcourse: this.startcourse,
        });
        this.$router.push({ name: "lessons" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
  },

  mounted() {
    let uId = sessionStorage.getItem("userId");
    this.userId = uId;
  },
};
</script>