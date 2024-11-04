<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },

  show: {
    type: Boolean,
    default: false
  },

  size: {
    type: String,
    default: 'md'
  },

  visible: {
    type: Boolean,
    default: false
  }
})

const modalClass = computed(() => {
  return {
    'w-[1000px]': props.size === 'lg',
    'w-[500px]': props.size === 'md',
    'w-[150px]': props.size === 'sm'
  }
})
</script>

<template>
  <transition name="modal" class="absolute inset-0 m-auto mx-auto my-auto h-60">
    
    <div v-if="visible" class="bg-white-normal rounded-md p-3 shadow-md" :class="modalClass">
      <div class="w-full h-full bg-gray-normal opacity-[0.5]"></div>
      <div class="">
        <h1>{{ title }}</h1>
      </div>

      <div class="mt-3">
        <slot name="content"/>
      </div>

      <div class="mt-3">
        <div class="absolute bottom-2 right-2">
          <slot name="actions" />
        </div>
      </div>
    </div>
</transition>
</template>

<style lang="scss" scoped>

.modal-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}

.modal-enter-to {
  opacity: 1;
  transform: translateY(0);

}

.modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
</style>

