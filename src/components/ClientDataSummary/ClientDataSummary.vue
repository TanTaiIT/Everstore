<script setup>
import { formatNumber } from './../../utils/index'

//Props, emit
const props = defineProps({
  client: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="w-full">
    <div class="flex flex-col gap-3">
      <div class="flex items-center">
        <span>Total Sales: </span>
        <span>{{ formatNumber(client.totalSalesAmount) }}</span>
      </div>
      <div class="flex items-center">
        <span>Loyalty Points: </span>
        <span>{{ formatNumber(client.loyaltyPoints) }}</span>
      </div>
      <div class="flex items-center">
        <span>Balance: </span>
        <span>{{ formatNumber(client.balance) }}</span>
      </div>
      <div class="flex items-center">
        <span>Outstanding: </span>
        <span>{{ formatNumber(client.outstanding) }}</span>
      </div>
      <div class="flex items-center">
        <span>Recent Visit Date: </span>
        <span>{{ client.recentVisitDateTimeTS }}</span>
      </div>
    </div>
  </div>
</template>
