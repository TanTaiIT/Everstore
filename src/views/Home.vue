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
import { onBeforeMount, onMounted } from 'vue';
import { authStore, useHomeStore } from '../store';
import moment from 'moment';

const { startLoading, stopLoading } = useLoading()
const { fetchHomeData } = useHomeStore()
const { shop } = authStore()
const getHomeData = async() => {
  try {
    startLoading()
    const currentDate = moment(new Date())
    console.log('moment', currentDate)
    const payload = {
      branchType: shop?.chainInfo?.branchType,
      businessTypeCode: shop?.businessTypeCode,
      chainId: shop?.chainInfo?.chainId,
      countryCode: 'VN',
      shopId: shop?.shopId,
      solutionId: 3002,
      todayTS: currentDate
    }
    const response = await fetchHomeData()
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
