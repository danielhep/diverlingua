import { createWebHistory, createRouter } from 'vue-router'
import firebase from 'firebase/app'

const AllLessonsPage = () => import('./views/AllLessons.vue')

const routes = [
  { path: '/lessons', component: AllLessonsPage, meta: { auth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
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
