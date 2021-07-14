import { createWebHistory, createRouter } from 'vue-router'
import firebase from 'firebase/app'
import { useAuth } from '@vueuse/firebase'

const AllLessonsPage = () => import('./views/AllLessons.vue')
const LoginPage = () => import('./views/Login.vue')
const AccountPage = () => import('./views/Settings.vue')
const Homepage = () => import('./views/Home/index.vue')

const routes = [
  {name: 'home', path: '/', component: Homepage, meta: { auth: false } },
  { name: 'lessons', path: '/lessons', component: AllLessonsPage, meta: { auth: true } },
  { name: 'login', path: '/login', component: LoginPage },
  { name: 'account', path: '/account', component: AccountPage, meta: { auth: true } },
  { name: 'lesson', path: '/lesson/:id', component: () => import('./views/Lesson.vue'), meta: { auth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.auth)
  if (requiresAuth && !await firebase.getCurrentUser()) {
    console.log(await firebase.getCurrentUser())
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

export default router
