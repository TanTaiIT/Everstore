<script setup>
import { MENU } from '../../constant/Menu';
</script>

<template>
  <div class="w-full bg-green-menu text-white-normal flex items-center justify-between">
    <ul class="flex items-center justify-between w-full">
      <li v-for="(menu, index) in MENU" :key="`menu-${index}`" class="px-4 py-3 uppercase hover:bg-menu-hover cursor-pointer relative group">
        <span>{{ menu.name }}</span>
        <ul class="absolute top-[100%] w-[200px] left-[0] hidden group-hover:block">
          <li v-for="(submenu, submenuIndex) in menu.submenu" :key="`submenu-${submenuIndex}`" class="bg-menu-hover px-4 py-3">
            {{ submenu.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>