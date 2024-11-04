import { defineStore } from "pinia"
import { ServiceCategory } from './../api/servicesApi.js'
export const useService = defineStore('service', {
  state: () => ({
    serviceCategory: []
  }),

  actions: {
    async getServiceCategoryData(query) {
      try {
        const response = await ServiceCategory(query)
      } catch (error) {
        throw new Error(error)
      }
    }
  }
})
