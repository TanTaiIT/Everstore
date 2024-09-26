<template>
  <div class="absolute top-[100%] shadow-md right-0 w-[150px] hover:opacity-1" :class="displayClass">
    <ul class="w-full">
      <li v-for="(item, index) in options" :key={index} class="px-2 border-b-2 border-gray-normal py-2 flex items-center w-full hover:bg-blue-normal transition-all">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },

  options: {
    type: Array,
    default: []
  }
})

const displayClass = computed(() => {
  return props.visible ? 'block' : 'hidden'

})
</script>
