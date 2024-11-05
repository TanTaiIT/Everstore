<script setup>
import { ref, watch } from 'vue';
import Button from './../Button/Button.vue'
import { useService } from '../../store';
import ServiceViewModel from '../../ViewModel/ServiceCategoryViewModel';
import { useLoading } from '../../composable/useLoading';
import { authStore } from '../../store';
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['hide-modal'])
const serviceActionData = ref({})
const { AddServiceCategory }  = useService()
const { shop } = authStore()
const { startLoading, stopLoading } = useLoading()

watch(() => props.visible, (value) => {
  if(value) {
    const { serviceCategoryById } = useService()
    serviceActionData.value = serviceCategoryById
  } else {
    const { setServiceCategory } = useService()
    setServiceCategory(new ServiceViewModel()) 
  }
})

const onConfirm = async () => {
  try {
    startLoading()
    const payload = {
      setServiceInactive: false,
      serviceCategoryName: serviceActionData.value.serviceCategoryName,
      shared: null,
      shopId: shop.shopId,
      status: 1
    }
    const response = await AddServiceCategory(payload)
    if(!response.data.isOK) {
      throw new Error(response.data.error_message)
    }

    emit('add-category')
  } catch (error) {
    throw new Error(error)
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

