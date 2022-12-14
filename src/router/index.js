import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'home_123123' */ '../views/home/HomeList')
  },
  {
    path: '/carList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: 'cartList' */ '../views/cart/CartList')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: 'shop_123123' */ '../views/shop/ShopList')
  },
  {
    path: '/orderPage',
    name: 'OrderPage',
    component: () => import(/* webpackChunkName: 'shop_123123' */ '../views/orderPage/OrderPage')
  },
  {
    // /:id
    path: '/orderConfirmation/:id',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: 'OrderConfirmation_123123' */ '../views/orderConfirmation/OrderConfirmation')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: 'RegisterList' */ '../views/register/RegisterList'),
    beforeEnter (to, from, next) {
      console.log('1234')
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'Login' */ '../views/login/LoginList'),
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
