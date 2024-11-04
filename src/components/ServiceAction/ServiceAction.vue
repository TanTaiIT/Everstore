<script setup>
import { onMounted } from 'vue';
import Button from './../Button/Button.vue'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

onMounted(() => {
  console.log('on Mounted')
})
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
        <input v-focus="true" class="w-full border-spacing-2 border-gray-normal border-2 outline-none px-2 py-2"/>
      </div>
    </div>
  </template>
    <template #actions>
      <Button>Save</Button>
      <Button @click="$emit('hide-modal')">Cancel</Button>
    </template>
  </Modal>
</template>

