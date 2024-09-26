<template>
  <div class="flex items-center gap-1 cursor-pointer relative" @click="handleShowDropdownMenu">
    <span class="pi pi-user w-30 block text-2xl"/>
    <p>{{ user.userID }}</p>
    <span class="pi pi-angle-down"/>

    <Dropdown :visible="isShowDropdown" :options="useAccountOptions"/>


  </div>
</template>

<script  setup>
import { computed, onMounted, ref } from 'vue';
import { authStore } from '../../store'
import Dropdown from '../dropdown/Dropdown.vue'

const store = authStore()
const { user } = store
const isShowDropdown = ref(false)

const handleShowDropdownMenu = () => {
  console.log('handleShowDropdownMenu')
  isShowDropdown.value = !isShowDropdown.value
}

const handleCheckOutSide = () => {
  console.log('handleCheckOutSide')
}

onMounted(() => {
  document.addEventListener('mousenter', handleCheckOutSide())
})

const useAccountOptions = computed(() => {
  return [
    {
      label: 'login History',
      value: 0
    },
    {
      label: 'Payment',
      value: 1
    },
    {
      label: 'Account',
      value: 2
    }
  ]
})
</script>
