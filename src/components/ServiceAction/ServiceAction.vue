<script setup>
import Button from './../Button/Button.vue'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <Modal
    :title="'Add Service'"
    :size="'md'"
    :visible="visible"
  >
    <div class="service">
      <div class="flex items-center justify-between">
        <label>Category Name</label>
        <input />
      </div>
    </div>

    <template #actions>
      <Button>Save</Button>
      <Button @click="$emit('hide-modal')">Cancel</Button>
    </template>
  </Modal>
</template>

