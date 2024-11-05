<script setup>
import { onMounted, reactive, ref, getCurrentInstance } from 'vue';
import Button from '../components/Button/Button.vue';
import { useService } from '../store';
import { useLoading } from '../composable/useLoading';
import Checkbox from '../components/Checkbox/Checkbox.vue';
import TitlePage from '../components/TitlePage/TitlePage.vue';
import ServiceAction from '../components/ServiceAction/ServiceAction.vue';
import { authStore } from '../store';

const isShowServiceAction = ref(false)
const filterData = reactive({
  pageNumber: 1,
  pageSize: 100,
  shopId: 0,
  status: 1
})
const { shop } = authStore()
const { proxy } = getCurrentInstance()
const { getServiceCategoryData, getServiceCategoryById, serviceCategoryById } = useService()
const serviceCategory = ref([])
const { startLoading, stopLoading } = useLoading()
const addServiceCategoryAction = () => {
  isShowServiceAction.value = true
}

onMounted(() => {
  filterData.shopId = shop.shopId
  getServicesCategory()
})

const getServicesCategory = async () => {
  try {
    startLoading()
    const response = await getServiceCategoryData(filterData)
    console.log('response', response)
    if(!response.data.isOK) {
      return
    }
    serviceCategory.value = response?.data?.result?.items || []
    
  } catch (error) {
    throw new Error(error)
  } finally {
    stopLoading()
  }
}

const onEditServiceCategory = (id) => {
  getServiceCategoryById(id)
  isShowServiceAction.value = true
}

const onAddServiceCategory = () => {
  getServicesCategory()
  isShowServiceAction.value = false
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
              <Checkbox>
                <template #label>
                  <label class="cursor-pointer" for="checkbox">Show Inactive</label>
                </template>
              </Checkbox>

              <div class="text-right">
                <Button @click="addServiceCategoryAction"> Add Category </Button>
              </div>
        </div>
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
                <tr v-for="category in serviceCategory" :key="category.serviceCategoryId">
                  <td>X</td>
                  <td>{{ category.serviceCategoryName }}</td>
                  <td><Button :outline="true" variant="white-normal" text-color="blue-normal" @click="onEditServiceCategory(category.serviceCategoryId)">Edit</Button></td>
                  <td><Button text-color="white-normal">View</Button></td>
                </tr>
                <tr>
                  <td colspan="4" v-if="serviceCategory.length === 0">No data for table</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="flex-1">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <div class="w-[90px] h-[30px] bg-green rounded-full flex items-center justify-center text-white-normal">
                  Tai Nguyen
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
                <tr>
                  <td>X</td>
                  <td>Suck D</td>
                  <td>1.000.000</td>
                  <td>2 Hour</td>
                  <td><Button>Edit</Button></td>
                  <td><Button>View</Button></td>
                </tr>
                <tr>
                  <td>X</td>
                  <td>Suck D</td>
                  <td>1.000.000</td>
                  <td>2 Hour</td>
                  <td><Button>Edit</Button></td>
                  <td><Button>View</Button></td>
                </tr>
                <tr>
                  <td>X</td>
                  <td>Suck D</td>
                  <td>1.000.000</td>
                  <td>2 Hour</td>
                  <td><Button>Edit</Button></td>
                  <td><Button>View</Button></td>
                </tr>

                <tr>
                  <td>X</td>
                  <td>Suck D</td>
                  <td>1.000.000</td>
                  <td>2 Hour</td>
                  <td><Button>Edit</Button></td>
                  <td><Button>View</Button></td>
                </tr>
                <tr>
                  <td>X</td>
                  <td>Suck D</td>
                  <td>1.000.000</td>
                  <td>2 Hour</td>
                  <td><Button>Edit</Button></td>
                  <td><Button>View</Button></td>
                </tr>

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
