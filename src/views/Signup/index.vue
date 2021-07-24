<template>
  <div class="signup">
    <div class="bg-signup pt-10 pb-7">
      <h1
        class="text-4xl text-center main-title font-display pt-color font-bold mb-10"
      >
        Create a new account
      </h1>
      <div class="container mx-auto">
        <div
          class=" max-w-3xl bg-gray-50 mx-auto my-10 mt-0 px-10 py-7 rounded-xl shadow-sm"
        >
          <Steps />
          <sign-up-stage-1 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// import { db } from "../../main";
import Steps from '../../components/ui/Steps.vue'
import SignUpStage1 from '../../components/users/SignUpStage1.vue'

export default {
  name: 'Register',
  components: { Steps, SignUpStage1 },
  data () {
    return {
      firstName: '',
      lastName: '',
      country: '',
      city: '',
      profession: '',
      email: '',
      password: '',
      gender: '',
      birthday: '',
      birthmonth: '',
      birthyear: '',
      hobby: '',
      learnspanish: '',
      spanishlevel: '',
      startcourse: '',
      error: null,
      errorMsg: ''
    }
  },

  methods: {
    async register () {
      if (
        this.firstName !== '' &&
        this.lastName !== '' &&
        this.country !== '' &&
        this.city !== '' &&
        this.profession !== '' &&
        this.email !== '' &&
        this.password !== '' &&
        this.gender !== '' &&
        this.birthday !== '' &&
        this.birthmonth !== '' &&
        this.birthyear !== '' &&
        this.hobby !== '' &&
        this.learnspanish !== '' &&
        this.spanishlevel !== '' &&
        this.startcourse !== ''
      ) {
        // console.log(this.firstName, this.lastName, this.gender);
        this.error = false
        this.errorMsg = ''

        const firebaseAuth = await firebase.auth()
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
        const result = await createUser
        const dataBase = firebase
          .firestore()
          .collection('user_data')
          .doc(result.user.uid)
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          country: this.country,
          city: this.city,
          profession: this.profession,
          email: this.email,
          password: this.password,
          gender: this.gender,
          birthday: this.birthday,
          birthmonth: this.birthmonth,
          birthyear: this.birthyear,
          hobby: this.hobby,
          learnspanish: this.learnspanish,
          spanishlevel: this.spanishlevel,
          startcourse: this.startcourse
        })
        this.$router.push({ name: 'home' })
        return
      }
      this.error = true
      this.errorMsg = 'Please fill out all the fields!'
    }
  }
}
</script>
