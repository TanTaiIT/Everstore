<script setup>
import { ref, watch } from 'vue';
import Button from './../Button/Button.vue'
import { useService } from '../../store';
import ServiceViewModel from '../../ViewModel/ServiceCategoryViewModel';
import { useLoading } from '../../composable/useLoading';
import { authStore } from '../../store';
import { AddServiceCategoryApi, EditServiceCategoryApi } from '../../api/servicesApi.js';
import { getCurrentInstance } from 'vue';
import { cloneDeep } from 'lodash'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['hide-modal'])
const { proxy } = getCurrentInstance()
const serviceActionData = ref({})
const { shop } = authStore()
const { startLoading, stopLoading } = useLoading()

watch(() => props.visible, (value) => {
  if(value) {
    const { serviceCategoryById } = useService()
    const serviceCategoryByIds = cloneDeep(serviceCategoryById) 
    serviceActionData.value = serviceCategoryByIds
  } else {
    const { setServiceCategory } = useService()
    setServiceCategory(new ServiceViewModel())
  }
})

const onConfirm = async () => {
  const { action } = useService()
  try {
    startLoading()
    let payload = {
      setServiceInactive: false,
      serviceCategoryName: serviceActionData.value.serviceCategoryName,
      shopId: shop.shopId,
      status: 1
    }

    let response = null
    if(action === 1) {
      payload = { ...payload, serviceCategoryId: serviceActionData.value.serviceCategoryId }
      response = await EditServiceCategoryApi(payload)
    } else {
      payload = {...payload, shared: null}
      response = await AddServiceCategoryApi(payload)
    }
    if(!response.data.isOK) {
      proxy.$toast.error(response.data.error_message)
      return
    }

    emit('add-category')
  } catch (error) {
    proxy.$toast.error(error.message)
  } finally {
    stopLoading()
  }
}

</script>
<template>
  <Modal
    :title="'Add Service'"
    :size="'md'"
    :visible="visible"
  >
  <template #content>
    <div class="service">
      <div class="flex items-center justify-center">
        <label class="min-w-[150px]">Category Name</label>
        <input v-focus:select="true" class="w-full border-spacing-2 border-gray-normal border-2 outline-none px-2 py-2" v-model="serviceActionData.serviceCategoryName"/>
      </div>
    </div>
  </template>
    <template #actions>
      <Button @click="onConfirm">Save</Button>
      <Button @click="$emit('hide-modal')">Cancel</Button>
    </template>
  </Modal>
</template>

