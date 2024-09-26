<template>
  <div class="w-full h-[60px] bg-white-normal flex items-center justify-between px-8">
    <div class="cursor-pointer">
      <img :src="LogoImage" alt="ahasoft logo" class="w-32" @click="goToHomeScreen"/>
    </div>

    <div class="flex items-center justify-center gap-2">
      <Button>Sales</Button>
      <Button>Calendar</Button>
    </div>

    <div class="flex items-center justify-center gap-4">
      <button class="bg-purple-normal px-3 py-2 rounded-full text-white-normal">
        <span class="pi pi-home text-xl" @click="goToHomeScreen" />
      </button>

      <UserAction />

      <div class="px-2 cursor-pointer" @click="onLogout">
        <span class="pi pi-sign-out" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Button from '../Button/Button.vue';
import LogoImage from './../../assets/template/images/ahasoft-logo.png'
import { authStore } from '../../store/AuthStore'
import UserAction from '../UserAction/UserAction.vue'
const store = authStore()

const { logout } = store
const router = useRouter()
const onLogout = () => {
  logout()
  router.push({name: 'login'})
}

const goToHomeScreen = () => {
  router.push({name: 'home'})
}
</script>
