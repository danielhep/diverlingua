import { createWebHistory, createRouter } from 'vue-router'
import firebase from 'firebase/app'

const LoginPage = () => import('./views/Login.vue')
const LessonsPage = () => import('./views/Lessons.vue')

const routes = [
  { path: '/login', component: LoginPage, meta: { chromeless: true } },
  { path: '/lessions', component: LessonsPage, meta: { auth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  console.log('Hello')
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
