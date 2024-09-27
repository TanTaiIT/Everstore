<template>
  <div class="w-full h-full overflow-y-auto">
    <div class="flex justify-between flex-col h-full bg-gray-normal">
      <header>
        <TopHeader />
        <Menu />
      </header>
      <main>
        <slot />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script setup>
import Menu from '../components/Menu/Menu.vue';
import Footer from '../components/Footer/Footer.vue';
import TopHeader from '../components/TopHeader/TopHeader.vue';
</script>