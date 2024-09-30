<template>
  <div class="w-full h-full flex items-center flex-wrap gap-5">
    <HomeBoard :title="'AhaSoft'" :type="BOARD_TYPE.ahasoft"/>
    <HomeBoard :title="'Ahasoft Notice'" :data="getSystemNotice" :type="BOARD_TYPE.ahasoft_notice"/>
    <HomeBoard :title="'Notice'" :data="systemBoard" :type="BOARD_TYPE.notice"/>
  </div>
</template>

<script setup>
import { BOARD_TYPE } from '../constant/common';
import { useLoading } from '../composable/useLoading';
import HomeBoard from '../components/HomeBoard/HomeBoard.vue'
import { onBeforeMount, onMounted } from 'vue';
import { authStore, useHomeStore } from '../store';
import { convertDateFromTimezoneToTimeStamp, convertDateToTimeZone } from '../utils';
const { startLoading, stopLoading } = useLoading()
const { fetchHomeData, systemBoard, systemNotice, getSystemNotice } = useHomeStore()
const { shop } = authStore()
const getHomeData = async() => {
  try {
    startLoading()

    const currentDate = convertDateFromTimezoneToTimeStamp(convertDateToTimeZone(new Date()))
    const payload = {
      branchType: shop?.chainInfo?.branchType,
      businessTypeCode: shop?.businessTypeCode,
      chainId: shop?.chainInfo?.chainId,
      countryCode: 'VN',
      shopId: shop?.shopId,
      solutionId: 3002,
      todayTS: currentDate
    }
    await fetchHomeData(payload)
  } catch (error) {
    throw new Error(error)
  } finally {
    stopLoading()
  }
}
onBeforeMount(() => {
  getHomeData()
})


</script>
