import { defineStore } from "pinia"

export const authStore = defineStore({
  state: () => ({
    return {
      user: null,
      shop: null,
      isLogin: false,
      accessToken: '',
      refreshToken: ''
    }
  })
})