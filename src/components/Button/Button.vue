<template>
  <button class="rounded-md px-8 py-2 text-white-normal bg-blue-normal" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup>
import { defineProps, getCurrentInstance } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'blue-normal'
  }
})
const { proxy } = getCurrentInstance()

const mergeAttribute = computed(()=> {
  return Object.assign({}, proxy.$attrs, {})
})

const mergeListener = computed(() => {
  return Object.assign({}, proxy.$listeners)
})
const customStyle = computed(() => {
  return `bg-${props.variant}`
})
</script>
