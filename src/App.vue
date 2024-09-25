<script setup>
import Loading from './components/loading/Loading.vue';
import MainLayout from './layouts/MainLayout.vue';

</script>

<template>
  <div class="w-full h-full">
    <router-view/>
    <Loading :key="'app-spiner'"/>
  </div>
</template>

