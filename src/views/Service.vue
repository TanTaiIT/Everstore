<script setup>
import { onMounted, reactive, ref, getCurrentInstance, computed } from 'vue'
import Button from '../components/Button/Button.vue'
import { useService } from '../store'
import { useLoading } from '../composable/useLoading'
import Checkbox from '../components/Checkbox/Checkbox.vue'
import TitlePage from '../components/TitlePage/TitlePage.vue'
import ServiceAction from '../components/ServiceAction/ServiceAction.vue'
import { authStore } from '../store'
import ServiceViewModel from '../ViewModel/ServiceCategoryViewModel'
import { ServiceApi } from '../api/servicesApi'
import Pagination from '../components/pagination/Pagination.vue'
import { convertMinuteToHour, formatNumber } from './../utils/index'
import { filter } from 'lodash'

const isShowServiceAction = ref(false)
const filterDataServiceCategory = reactive({
  pageNumber: 1,
  pageSize: 10,
  shopId: 0,
  status: 1
})

const filterDataService = reactive({
  pageNumber: 1,
  pageSize: 10,
  shopId: 0,
  status: 1,
  serviceCategoryId: 0
})

const currentPage = ref(1)

const { shop } = authStore()
const { proxy } = getCurrentInstance()
const { getServiceCategoryData, setAction } = useService()
const serviceCategory = ref([])
const services = ref([])
const selectServiceCategory = ref({})
const currentPrepaidServiceId = ref(0)
const { startLoading, stopLoading } = useLoading()
const isShowInactiveServiceCategory = ref(false)
const isShowInactiveService = ref(false)
const addServiceCategoryAction = () => {
  isShowServiceAction.value = true
  setAction({
    action: 0,
    data: new ServiceViewModel()
  })
}

onMounted(async() => {
  filterDataServiceCategory.shopId = shop.shopId
  filterDataService.shopId = shop.shopId
  await getServicesCategory()
  getService()
})

const getServicesCategory = async () => {
  try {
    startLoading()
    const response = await getServiceCategoryData({...filterDataServiceCategory, status: isShowInactiveServiceCategory.value ? 1 : 0})
    if(!response.data.isOK) {
      return
    }
    serviceCategory.value = response?.data?.result
    currentPrepaidServiceId.value = serviceCategory.value?.items[0]?.serviceCategoryId

  } catch (error) {
    throw new Error(error)
  } finally {
    stopLoading()
  }
}

const getService = async () => {
  try {
    startLoading()
    const selectCategory = serviceCategory.value?.items?.find(item => item.serviceCategoryId === currentPrepaidServiceId.value)
    if(!selectCategory) {
      return
    } else {
      selectServiceCategory.value = selectCategory
    }
    const response = await ServiceApi({...filterDataService, serviceCategoryId: currentPrepaidServiceId.value})

    if(!response.data.isOK) {
      proxy.$toast.error(response.data.error_message)
      return
    }

    services.value = response.data.result.items || []
  } catch (error) {
    proxy.$toast.error(error.message)
  } finally {
    stopLoading()
  }
}

const onEditServiceCategory = (id) => {
  const findIndex = serviceCategory?.value?.items.findIndex(item => item.serviceCategoryId === id)

  let signleCategory = new ServiceViewModel()
  if(findIndex !== -1) {
    signleCategory = serviceCategory.value.items[findIndex]
  }
  

  setAction({
    action: 1,
    data: signleCategory
  })
  isShowServiceAction.value = true
}

const onAddServiceCategory = () => {
  getServicesCategory()
  isShowServiceAction.value = false
}

const onViewService = (id) => {
  currentPrepaidServiceId.value = id
  const selectService = serviceCategory.value.items.find(item => item.serviceCategoryId === id)
  if(!selectService) {
    return
  } else {
    selectServiceCategory.value = selectService
  }
  getService()
}

const onShowInactiveServiceCategory = async() => {
  try {
    startLoading()
    const response = await getServiceCategoryData({...filterDataServiceCategory, status: isShowInactiveServiceCategory.value ? 1 : 0})
    if(!response.data.isOK) {
      proxy.$toast.error(response.data.error_message)
      return
    }

    serviceCategory.value = response.data.result
    filterDataServiceCategory.pageNumber = 1
    currentPage.value = 1
  } catch (error) {
    proxy.$toast.error(error.message)
  } finally {
    stopLoading()
  }
}
const setCurrentPage = (value) => {
  filterDataServiceCategory.pageNumber = value
  currentPage.value = value
  getServicesCategory()
}
</script>
<template>
  <div class="service">
    <div class="content-wrapper">
      <TitlePage :title="'Service'"/>

      <div class="body-wrapper mt-2 p-3">

        <div class="flex mt-5 gap-[10px]">
          <div class="flex-1">
            <div class="flex items-center justify-between mb-3">
              <Checkbox @input="onShowInactiveServiceCategory" v-model="isShowInactiveServiceCategory">
                <template #label>
                  <label class="cursor-pointer" for="checkbox">Show Inactive</label>
                </template>
              </Checkbox>

              <div class="text-right">
                <Button @click="addServiceCategoryAction"> Add Category </Button>
              </div>
        </div>
        <div class="h-[400px] overflow-auto relative">
            <table>
              <thead>
                <tr>
                  <th>Shared</th>
                  <th>Service Category</th>
                  <th>Edit</th>
                  <th>View</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="category in serviceCategory.items" :key="category.serviceCategoryId">
                  <td>X</td>
                  <td>{{ category.serviceCategoryName }}</td>
                  <td><Button :outline="true" variant="white-normal" text-color="blue-normal" @click="onEditServiceCategory(category.serviceCategoryId)">Edit</Button></td>
                  <td><Button text-color="white-normal" @click="onViewService(category.serviceCategoryId)">View</Button></td>
                </tr>
                <tr>
                  <td colspan="4" v-if="serviceCategory?.items?.length === 0">No data for table</td>
                </tr>
              </tbody>
            </table>

            <Pagination class="mt-3 mr-auto" :total-items="serviceCategory?.pagingInfo?.totalItems" :current-page="currentPage"  @set-current-page="setCurrentPage"/>
          </div>
          </div>

          <div class="flex-1">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <div class="w-[90px] h-[30px] bg-green rounded-full flex items-center overflow-hidden justify-center text-white-normal ">
                  <span class="w-[100px] d-block whitespace-nowrap text-center">{{ selectServiceCategory.serviceCategoryName }}</span>
                </div>
                <Checkbox class="ml-3">
                  <template #label>
                    <label class="cursor-pointer" for="checkbox">Show Inactive</label>
                  </template>
                </Checkbox>
              </div>

              <Button>
                Add Service
              </Button>
            </div>

            <table>
              <thead>
                <tr>
                  <td>Shared</td>
                  <td>Service</td>
                  <td>Price</td>
                  <td>Estimated Time</td>
                  <td>Edit</td>
                  <td>Prepaid Service</td>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in services" :key="item.serviceCategoryId">
                  <td>X</td>
                  <td>{{ item.serviceName }}</td>
                  <td>{{ formatNumber(item.price)}}</td>
                  <td>{{ convertMinuteToHour(item.estimatedTime) }}</td>
                  <td><Button>Edit</Button></td>
                  <td><Button>View</Button></td>
                </tr>
                <td colspan="6" v-if="services.length === 0">No data for table</td>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <service-action :visible="isShowServiceAction" @hide-modal="isShowServiceAction = false" @add-category="onAddServiceCategory"/>
  </div>
</template>

<style lang="scss" scoped>
</style>
