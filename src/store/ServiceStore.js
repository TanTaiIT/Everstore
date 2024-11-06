import { defineStore } from "pinia"
import { ServiceCategory, AddServiceCategoryApi, ServiceApi } from './../api/servicesApi.js'
import ServiceCategoryViewModel from "../ViewModel/ServiceCategoryViewModel.js"
export const useService = defineStore('service', {
  state: () => ({
    serviceCategory: [],
    action: 0,
    serviceCategoryById: new ServiceCategoryViewModel(),
    service: []
  }),

  actions: {
    async getServiceCategoryData(query) {
      try {
        const response = await ServiceCategory(query)
        if (response?.data?.isOK) {
          this.serviceCategory = response?.data?.result?.items || []
        }
        this.serviceCategory = response?.data?.result || []

        return response

      } catch (error) {
        throw new Error(error)
      }
    },

    async getServiceCategoryById(id) {
      const findIndex = this.serviceCategory.findIndex(item => item.serviceCategoryId === id)

      if (findIndex !== -1) {
        this.serviceCategoryById = Object.assign({}, this.serviceCategory[findIndex])
      }
    },

    setServiceCategory() {
      this.serviceCategoryById = new ServiceCategoryViewModel()
    },

    setAction(data) {
      this.serviceCategoryById = data.data
      this.action = data.action
    },

    async AddServiceCategory(query) {
      try {
        const response = await AddServiceCategoryApi(query)
        if (!response?.data?.isOK) {
          throw new Error(response?.data?.errorMessages)
        }

        return response
      } catch (error) {
        throw new Error(error)
      }
    }
  }
})
