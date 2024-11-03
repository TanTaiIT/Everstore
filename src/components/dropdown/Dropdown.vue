<template>
  <div ref="dropdownRef">
    <slot name="toggle" v-bind="slotProps"/>

    <transition name="fade-slide">
      <div class="shadow-md absolute w-[150px] border-[1px] border-gray-normal bg-white-normal z-10" v-if="isShowDropDown">
        <ul>
          <li v-for="(item, index) in options" :key="index" class="hover:bg-blue-normal p-2 transition-all cursor-pointer">
            <span>{{ item.label }}</span>
          </li>
        </ul>
      </div>
  </transition>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'
import { onMounted, onBeforeUnmount } from 'vue'

const dropdownRef = ref(null)
onMounted(() => {
  document.addEventListener('click', (e) => {
    clickOutSide(e)
  })
})

onBeforeUnmount(() => {
  document.removeEventListener('click', (e) => {
    clickOutSide(e)
  })
})

const clickOutSide = (e) => {
  if(dropdownRef.value) {
    if(!dropdownRef.value.contains(e.target)) {
      isShowDropDown.value = false
    }
  }
}

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

<style lang="css" scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
}

.fade-slide-enter-to {
  transform: translateY(0)
}
.fade-slide-enter-from {
  transform: translateY(-20px);
}

.fade-slide-leave-to {
  transform: translateY(-20px);
}

.fade-slide-enter /* .fade-slide-leave-active in versions <2.1.8 */ {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
