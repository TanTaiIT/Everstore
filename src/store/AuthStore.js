import { defineStore } from "pinia"
import { userLogin, refreshTokenShop } from "../api/authApi"

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
    accessToken: localStorage.getItem('accessToken') || '',
    refreshToken: localStorage.getItem('refreshToken') || '',
    isRefreshingToken: false,
    isRefreshTokenOK: false
  }),

  actions: {
    setRefreshingToken(refreshToken) {
      this.isRefreshingToken = refreshToken
    },

    async authUser(user) {
      try {
        const query = {
          userId: user.user_name,
          password: user.password,
          solutionId: 3002
        }

        const response = await userLogin(culture, query)
        if (response?.data?.isOK) {
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
        }
        return

      } catch (error) {
      }
    },

    async refreshTokenApi(refreshToken, accessToken) {
      this.setRefreshingToken(true)
      try {
        const payload = {
          refreshToken: refreshToken,
          authToken: accessToken
        }
        const response = await refreshTokenShop(culture, payload)
        
        if (response?.data?.isOK) {
          this.accessToken = response?.data?.result?.authToken
          this.refreshToken = response?.data?.result?.refreshToken
          this.isRefreshTokenOK = true
          setAccessToken(this.accessToken)
          setRefreshToken(this.refreshToken)

          this.isRefreshingToken = false
          return response
        }
        this.isRefreshingToken = false
        
      } catch (error) {
        throw new Error(error)
      }
    },

    logout() {
      this.$reset
      clearStorageData()
    }
  },
})
