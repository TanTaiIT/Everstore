<template>
  <div class="w-full h-full overflow-y-auto">
    <div class="bg-gray-normal">
      <header>
        <TopHeader />
        <Menu />
      </header>
      <main class="p-5">
        <slot>
          <router-view />
        </slot>
      </main>
      <footer class="fixed bottom-0 w-full">
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script setup>
import Menu from '../components/Menu/Menu.vue';
import Footer from '../components/Footer/Footer.vue';
import TopHeader from '../components/TopHeader/TopHeader.vue';
import { onBeforeMount } from 'vue';
import { useLoading } from '../composable/useLoading';
import useShopData from '../composable/useShopData';

const { startLoading, stopLoading } = useLoading()
const { getShopInfo } = useShopData()
const getShopBasicInfo = async() => {
  try {
    startLoading()
    const response = await getShopInfo()
  } catch (error) {
    console.log('error', error)
  } finally {
    stopLoading()
  }
}
onBeforeMount(() => {
  getShopBasicInfo()
})
</script>
