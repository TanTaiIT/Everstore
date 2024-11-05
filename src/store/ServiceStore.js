import { defineStore } from "pinia"
import { ServiceCategory, AddServiceCategoryApi } from './../api/servicesApi.js'
import ServiceCategoryViewModel from "../ViewModel/ServiceCategoryViewModel.js"
export const useService = defineStore('service', {
  state: () => ({
    serviceCategory: [],
    serviceCategoryById: new ServiceCategoryViewModel()
  }),

  actions: {
    async getServiceCategoryData(query) {
      try {
        const response = await ServiceCategory(query)
        console.log('response', response)
        if(response?.data?.isOK) {
          this.serviceCategory = response?.data?.result?.items || []
        }
        this.serviceCategory = response?.data?.result?.items || []

        return response

      } catch (error) {
        console.log('error', error)
        throw new Error(error)
      }
    },

    async getServiceCategoryById(id) {
      const findIndex = this.serviceCategory.findIndex(item => item.serviceCategoryId === id)

      if(findIndex !== -1) {
        this.serviceCategoryById = Object.assign({}, this.serviceCategory[findIndex])
      }
    },

    setServiceCategory() {
      this.serviceCategoryById = new ServiceCategoryViewModel()
    },

    async AddServiceCategory(query) {
      try {
        const response = await AddServiceCategoryApi(query)
        console.log('response', response)
        if(!response?.data?.isOK) {
          throw new Error(response?.data?.errorMessages)
        }

        return response
      } catch (error) {
        throw new Error(error)
      }
    }
  }
})
