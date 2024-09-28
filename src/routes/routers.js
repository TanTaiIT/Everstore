import { createWebHistory, createRouter } from "vue-router"

import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import MainLayout from "../layouts/MainLayout.vue"
import { authStore } from './../store/AuthStore.js'

const routers = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },

  {
    name: '/',
    component: MainLayout,
    children: [
      {
        name: 'home',
        path: '/home',
        component: Home,
        meta: {
          preload: true
        }
      }
    ]
  }


]


const router = createRouter({
  history: createWebHistory(),
  routes: routers
})

router.beforeEach((to, from, next) => {
  const store = authStore()
  const { isLogin } = store
  if (!isLogin && to.name !== 'login') {
    next({ name: 'login' })
  }

  next()
})

export default router
