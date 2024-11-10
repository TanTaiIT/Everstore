<script setup>
import Button from './../Button/Button.vue'

//State

// Computed

// Methods
const onSearchClient = () => {
  console.log('onSearchClient')
}

//Watch

// lift cycle
</script>

<template>
  <div class="flex items-center gap-8">
    <form class="flex items-center gap-3" @submit.prevent="onSearchClient">
      <input type="text" class="relative px-3 h-[35px] outline-none" placeholder="Search client">
      <button type="submit" class="bg-blue-normal text-white-normal p-3 flex items-center justify-center rounded-md">
        <span class="pi pi-search"></span>
      </button>
    </form>

    <Button>Add Client</Button>
  </div>
</template>

<style lang="scss">
</style>
