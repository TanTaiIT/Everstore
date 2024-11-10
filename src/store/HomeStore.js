import { defineStore } from "pinia"
import { fetchHomeApi } from "../api/HomeApi"
export const useHomeStore = defineStore('home', {
  state: () => {
    return {
      systemNotice: [],
      systemBoard: []
    }
  },

  getters: () => {
    getSystemNotice = () => {
      return systemNotice
    }
  },

  actions: {
    async fetchHomeData(payload) {
      try {
        const response = await fetchHomeApi(payload)
        console.log('lang dong', response)

        if (response?.data?.isOK) {
          this.systemNotice = response?.data?.result?.systemNotices
          this.systemBoard = response?.data?.result?.systemBoards
        }
      } catch (error) {
        throw new Error(error)
      }
    }
  }
})
