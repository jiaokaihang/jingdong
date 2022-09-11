import { createRouter, createWebHashHistory } from 'vue-router'
import HomeList from '../views/home/HomeList'
import LoginList from '../views/login/LoginList'
import RegisterList from '../views/register/RegisterList'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeList
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterList,
    beforeEnter (to, from, next) {
      console.log('1234')
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
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
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})
export default router
