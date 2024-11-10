<template>
  <button :class="buttonClass" v-bind="$attrs">
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
  },

  outline: {
    type: Boolean,
    default: false
  },

  textColor: {
    type: String,
    default: 'white-normal'
  }
})

const buttonClass = computed(() => {
  return [
    `bg-${props.variant}`,
    'rounded-md px-8 py-2',
    `text-${props.textColor}`,
    {'border-[1px]' : props.outline},


  ]
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
