import { createRouter, createWebHashHistory } from 'vue-router'
import HomeList from '../views/home/HomeList'
import LoginList from '../views/login/LoginList'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeList
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginList,
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  (isLogin || to.name === 'Login') ? next() : next({ name: 'Login' })
})

export default router
