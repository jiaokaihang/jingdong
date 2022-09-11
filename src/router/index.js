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
    component: LoginList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
