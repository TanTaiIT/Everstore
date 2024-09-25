<template>
  <div class="w-full h-full bg-gray-normal flex items-center justify-center">
    <div class="w-[400px]">
      <img :src="LogoImage" alt="ahasoft logo" class="w-32" />
      <p class="mx-auto text-lg uppercase mb-2 text-center font-bold text-blue-normal">Login</p>
      <form @submit="onLogin">
        <div class="mb-5">
          <input v-model="loginData.userName" type="text" class="outline-none w-full h-[40px] px-2 rounded" placeholder="user name" />
        </div>
        <div class="mb-5">
          <input v-model="loginData.password" type="text" class="outline-none w-full h-[40px] px-2 rounded" placeholder="user name" />
        </div>

        <div class="w-full">
          <button type="submit" class="w-full text-white-normal bg-blue-normal p-3 hover:bg-blue-hover transition-all rounded-sm">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// Utils
import { ref } from 'vue'
import { authStore } from '../store'
import LogoImage from './../assets/template/images/ahasoft-logo.png'
import { useRouter } from 'vue-router'
import { useLoading } from '../composable/useLoading'

const router = useRouter()
const store = authStore()
const { startLoading, stopLoading } = useLoading()
const { authUser } = store
const loginData = ref({
  userName: '',
  password: ''
})

const goToHomePage = () => {
  console.log('go here')
  router.push({name: 'home',})
}

const onLogin = async(e) => {
  e.preventDefault()
  
  try {
    startLoading()
    const payload = {
      user_name: loginData.value.userName,
      password: loginData.value.password
    }
    const response = await authUser(payload)

    if(response?.data?.isOK) {
      goToHomePage()
    }
  } catch (error) {
    console.log('error', error)
  } finally {
    stopLoading()
  }
  
}

</script>