<template>
  <div class="w-full h-[60px] bg-white-normal flex items-center justify-between px-5">
    <div class="">
      <img :src="LogoImage" alt="ahasoft logo" class="w-32" />
    </div>

    <div class="flex items-center justify-center gap-2">
      <Button>Sales</Button>
      <Button>Calendar</Button>
    </div>

    <div class="flex items-center justify-center">
      <span class="pi pi-home text-red" />
    </div>
  </div>
</template>

<script setup>
import Button from '../Button/Button.vue';
import LogoImage from './../../assets/template/images/ahasoft-logo.png'
</script>