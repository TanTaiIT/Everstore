<template>
  <div class="w-full h-full overflow-y-auto">
    <TopHeader />
    <slot />
  </div>
</template>

<script setup>
import TopHeader from '../components/TopHeader/TopHeader.vue';
</script>