import { defineStore } from "pinia"
import { getBasisShopInfo } from "../api/authApi"
export const useHomeStore = defineStore('home', {
  state: () => {
    return {
      systemNotice: [],
      systemBoard: []
    }
  },

  actions: {
    async getHomeData(payload) {
      try {
        const response = await getBasisShopInfo()
      } catch (error) {
        console.log('error', error)
      }
    }
  }
})
