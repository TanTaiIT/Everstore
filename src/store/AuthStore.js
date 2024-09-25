import { defineStore } from "pinia"
import { userLogin } from "../api/authApi"

const culture = 'culture=en-US&ui-culture=en-US'

const setAccessToken = (accessToken) => {
  localStorage.setItem('accessToken', accessToken)
}
const setRefreshToken = (refreshToken) => {
  localStorage.setItem('refreshToken', refreshToken)
}
export const authStore = defineStore('auth', {
  state: () => ({
    user: null,
    shop: null,
    isLogin: false,
    accessToken: '',
    refreshToken: ''
  }),

  actions: {
    async authUser(user) {
      try {
        const query = {
          userId: user.user_name,
          password: user.password,
          solutionId: 3002
        }

        const response = await userLogin(culture, query)
        const { shopBasicInfo, userAuthInfo } = response?.data?.result || {}
        this.user = userAuthInfo
        this.shop = shopBasicInfo
        this.accessToken = userAuthInfo?.authToken
        this.refreshToken = userAuthInfo?.refreshToken
        this.isLogin = true

        setAccessToken(this.accessToken)
        setRefreshToken(this.refreshToken)

        return response
      } catch (error) {
        console.log('errror', error)
      }
    }
  },
})