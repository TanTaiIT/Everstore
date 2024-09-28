<template>
  <div id="v-spinner" v-if="isLoading" class="w-full h-full bg-gray-normal bg-opacity-50 absolute left-0 top-0 flex items-center justify-center text-blue-normal flex-col gap-3 z-50">
    <div class="animate-spin w-10 h-10 border-4 border-blue-normal rounded-full border-t-white-normal"></div>
    <h1>Loading...</h1>
  </div>
</template>

<script setup>
import { useAppStore } from '../../store/AppStore'
import { computed, onMounted } from 'vue';
const store = useAppStore()

const isLoading = computed(() => store.getLoading)

</script>
