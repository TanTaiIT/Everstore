<script setup>
import { onMounted } from 'vue';

//props, emit
const props = defineProps({
  client: {
    type: Object,
    default: () => ({})
  }
})

onMounted(() => {
  console.log('client', props.client)
})

</script>

<template>
  <div class="w-full flex items-center gap-6">
    <div class="bg-gray-normal border-gray-normal border-1 w-[100px] h-[140px] flex items-center justify-center">
      <span>Client Image</span>
    </div>

    <div class="flex flex-col gap-3">
      <span>{{ client.clientName }}</span>
      <span>{{ client.mobileNumber }} / {{ client.phoneNumber }}</span>
      <span>No: {{ client.memberNumber || '' }}</span>
      <span>Preffered Staff: {{ client.preferredStaffId }} </span>
      <span>Birthday: {{ client.birthDD }} / {{ client.birthMonth }} / {{ client.birthYear }}</span>
    </div>
  </div>
</template>
