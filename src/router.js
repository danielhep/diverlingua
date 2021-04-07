import { createWebHistory, createRouter } from 'vue-router'
import firebase from 'firebase/app'
import { useAuth } from '@vueuse/firebase'

const AllLessonsPage = () => import('./views/AllLessons.vue')
const LoginPage = () => import('./views/Login.vue')

const routes = [
  { name: 'lessons', path: '/lessons', component: AllLessonsPage, meta: { auth: true } },
  { name: 'login', path: '/login', component: LoginPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const { isAuthenticated, user } = useAuth()
  const requiresAuth = to.matched.some(record => record.meta.auth)
  if (requiresAuth && !await firebase.getCurrentUser()) {
    console.log(await firebase.getCurrentUser())
    alert('log in please')
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

export default router
