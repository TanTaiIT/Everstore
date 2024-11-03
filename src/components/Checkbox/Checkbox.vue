<script setup>

</script>

<template>
  <div class="flex items-center justify-center gap-[5px]" v-bind="$attrs">
    <input type="checkbox" id="checkbox" name="checkbox" class="pt-[5px] w-[20px] h-[20px] cursor-pointer">
    <slot name="label" />
  </div>
</template>

