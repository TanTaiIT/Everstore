<script setup>
import Button from './../components/Button/Button.vue';
import ClientSearch from '../components/ClientSearch/ClientSearch.vue';
import ClientDataSummary from '../components/ClientDataSummary/ClientDataSummary.vue';
import ClientInfoSummary from '../components/ClientInfo/components/ClientInfoSummary.vue';
import ClientSalesPage from '../components/ClientSalesPage/ClientSalesPage.vue';
</script>

<template>
  <div class="pb-3">
    <client-search />
  </div>

  <div class="flex gap-5">
    <div class="shadow-lg bg-white-normal h-[250px] p-3 w-[50%] rounded-sm">
        <div class="flex items-center justify-between">
          <div>
            <client-info-summary />
          </div>

          <div class="p-3 flex items-center flex-col gap-3 client-info-action">
            <Button>Edit</Button>
            <Button>Family</Button>
            <Button>Consent Form</Button>
          </div>

        </div>
        <div class="h-[60px] border border-[#e6e6e6]">
      </div>
    </div>

    <div class="shadow-lg bg-white-normal p-3 h-[250px] w-[50%] rounded-sm relative">
      <client-data-summary />

      <div class="flex items-center gap-3 absolute bottom-2 justify-between w-full p-3">
        <Button>Add Sales</Button>
        <Button>Add Refund</Button>
        <Button>Add Photos</Button>
      </div>
    </div>

  </div>

</template>

<style lang="scss" scoped>
.client-info-action {
  button {
    min-width: 150px;
  }
}
</style>
