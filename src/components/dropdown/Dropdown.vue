<template>
  <div>
    <slot name="toggle" v-bind="slotProps"/>

    <div class="shadow-md absolute w-[150px] border-[1px] border-gray-normal bg-white-normal z-10" v-if="isShowDropDown">
      <ul>
        <li v-for="(item, index) in options" :key="index" class="hover:bg-blue-normal p-2 transition-all cursor-pointer">
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    default: []
  }
})

const isShowDropDown = ref(false)

const toggleDropdown = () => {
  if(!isShowDropDown.value) {
    isShowDropDown.value = true
  } else {
    isShowDropDown.value = false
  }
}
const slotProps = computed(() => {
  return {
    toggle: toggleDropdown
  }
})
</script>
