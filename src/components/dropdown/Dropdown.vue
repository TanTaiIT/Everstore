<template>
  <div class="absolute top-[100%] shadow-md right-0 w-[200px] hover:opacity-1" :class="displayClass">
    <ul class="w-full">
      <li class="px-2 border-b-2 border-gray-normal py-2 flex items-center w-full hover:bg-blue-normal transition-all">item1</li>
      <li class="px-2 border-b-2 border-gray-normal py-2 flex items-center w-full hover:bg-blue-normal transition-all">item1</li>
      <li class="px-2 border-b-2 border-gray-normal py-2 flex items-center w-full hover:bg-blue-normal transition-all">item1</li>
      <li class="px-2 border-b-2 border-gray-normal py-2 flex items-center w-full hover:bg-blue-normal transition-all">item1</li>
      <li class="px-2 border-b-2 border-gray-normal py-2 flex items-center w-full hover:bg-blue-normal transition-all">item1</li>
      <li class="px-2 border-b-2 border-gray-normal py-2 flex items-center w-full hover:bg-blue-normal transition-all">item1</li>
    </ul>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const displayClass = computed(() => {
  return props.visible ? 'block' : 'hidden'

})
</script>
