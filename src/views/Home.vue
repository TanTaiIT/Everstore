<template>
  <div class="w-full h-full flex items-center flex-wrap gap-5">
    <HomeBoard :title="'AhaSoft'" :type="BOARD_TYPE.ahasoft"/>
    <HomeBoard :title="'Ahasoft Notice'" :type="BOARD_TYPE.ahasoft_notice"/>
    <HomeBoard :title="'Notice'" :type="BOARD_TYPE.notice"/>
  </div>
</template>

<script setup>
import { BOARD_TYPE } from '../constant/common';
import { useLoading } from '../composable/useLoading';
import HomeBoard from '../components/HomeBoard/HomeBoard.vue'
import { onBeforeMount } from 'vue';
const { startLoading, stopLoading } = useLoading()

const getHomeBoardData = () => {
  try {
    startLoading()

  } catch (error) {
    console.log('error', error)
  } finally {
    stopLoading()
  }
}

onBeforeMount(() => {
  getHomeBoardData()
})

</script>
