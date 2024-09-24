import { createWebHistory, createRouter } from "vue-router"

import Login from "../views/Login.vue"

const routers = [
  {
    name: 'login',
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers
})

export default router