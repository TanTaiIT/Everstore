import { createWebHistory, createRouter } from "vue-router"

import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import Service from "../views/Service.vue"
import MainLayout from "../layouts/MainLayout.vue"
import { authStore } from './../store/AuthStore.js'
import SalesPage from "../views/SalesPage.vue"
import ClientSalesPage from "../views/ClientSalesPage.vue"

const routers = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },

  {
    name: '/',
    path: '',
    component: MainLayout,
    children: [
      {
        name: 'home',
        path: '/home',
        component: Home,
        meta: {
          preload: true
        }
      },

      {
        name: 'service',
        path: '/service',
        component: Service,
      },

      {
        name: 'sales',
        path: '/sales',
        component: SalesPage,

      },
      {
        name: 'sales-client',
        path: '/sales/:shopId/:clientId',
        component: ClientSalesPage
      }
    ]
  },




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
