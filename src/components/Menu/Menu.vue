<script setup>
import { MENU } from '../../constant/Menu';
import { computed } from 'vue';

</script>

<template>
  <div class="w-full bg-green-menu text-white-normal flex items-center justify-between">
    <ul class="flex items-center justify-between w-full px-20">
      <li v-for="(menu, index) in MENU" :key="`menu-${index}`" class="px-4 py-3 uppercase hover:bg-menu-hover cursor-pointer relative group">
        <span>{{ menu.name }}</span>
        <ul :class="`absolute top-[100%] w-[200px] hidden group-hover:block z-10 ${MENU[MENU.length - 1].name === menu.name ? 'right-[0]' : 'left-[0]'}`">
          <li v-for="(submenu, submenuIndex) in menu.submenu" :key="`submenu-${submenuIndex}`" class="bg-menu-hover px-4 py-3">
           <router-link class="text-white-normal" :to="{name: 'service', path: '/service'}">{{ submenu.name }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
