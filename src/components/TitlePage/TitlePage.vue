<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="border-b-2">
    <h1 class="text-xl uppercase pb-3">{{ title }}</h1>
  </div>
</template>
