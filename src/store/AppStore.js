import { defineStore } from "pinia"

export const useAppStore = defineStore('app', {
  state: () => ({
    isLoading: false
  }),

  getters: {
    getLoading: (state) => state.isLoading
  },

  actions: {
    setLoading(loading) {
      this.isLoading = loading
    }
  }
})
