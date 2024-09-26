import { defineStore } from "pinia"
import { userLogin } from "../api/authApi"

const culture = 'culture=en-US&ui-culture=en-US'

const setAccessToken = (accessToken) => {
  localStorage.setItem('accessToken', accessToken)
}
const setRefreshToken = (refreshToken) => {
  localStorage.setItem('refreshToken', refreshToken)
}

const userLoginIntoSession = (userInfo, shopInfo) => {
  sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
  sessionStorage.setItem('shopInfo', JSON.stringify(shopInfo))
  sessionStorage.setItem('isLogin', true)
}

const clearStorageData = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  sessionStorage.clear()
}

const getUserInfoFromST = () => {
  return JSON.parse(sessionStorage.getItem('userInfo')) || {}
}

const getShopInfoFromST = () => {
  return JSON.parse(sessionStorage.getItem('shopInfo'))
}
export const authStore = defineStore('auth', {
  state: () => ({
    user: getUserInfoFromST(),
    shop: getShopInfoFromST(),
    isLogin: sessionStorage.getItem('isLogin'),
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

        userLoginIntoSession(userAuthInfo, shopBasicInfo)

        return response
      } catch (error) {
        console.log('errror', error)
      }
    },

    logout() {
      this.$reset
      clearStorageData()
    }
  },
})
