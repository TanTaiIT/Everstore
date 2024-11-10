<script setup>
</script>

<template>
  <div>
    <div class="flex items-center gap-5">
      <div class="left flex items-center justify-center bg-white-normal">
        <slot name="client-info" />

        <div class="flex items-center flex-col">
          <slot name="client-action" />
        </div>
      </div>

      <div class="right flex flex-col items-center justify-between bg-white-normal">
        <slot name="client-data-summary"/>

        <slot name="client-sales-action" />
      </div>
    </div>
  </div>
</template>
