import { createWebHistory, createRouter } from "vue-router"

import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import MainLayout from "../layouts/MainLayout.vue"

const routers = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },

  {
    name: '',
    path: '/',
    component: MainLayout,
    children: [
      {
        name: 'home',
        path: '/',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers
})

export default router