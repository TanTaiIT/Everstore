<template>
  <button class="rounded-md px-8 py-2 text-white-normal" :class="customStyle" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'blue-normal'
  }
})

const customStyle = computed(() => {
  return `bg-${props.variant}`
})
</script>