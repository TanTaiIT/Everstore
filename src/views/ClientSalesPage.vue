<script setup>
import Button from './../components/Button/Button.vue';
import ClientSearch from '../components/ClientSearch/ClientSearch.vue';
import ClientDataSummary from '../components/ClientDataSummary/ClientDataSummary.vue';
import ClientInfoSummary from '../components/ClientInfo/components/ClientInfoSummary.vue';

//Vue
import { computed, onBeforeMount, ref } from 'vue';

//Utils
import { useRoute } from 'vue-router';
import { useClient } from '../composable/useClient';

//State
const client = ref(null)
const { fetClientData } = useClient()

//Computed
const hasClient = computed(() => {
  return client.value !== null
})


//Methods

//Watch

//Life Cycles
onBeforeMount(async () => {
  const route = useRoute()
  const payload = {
    shopId: Number(route.params.shopId),
    clientShopId: route.params.shopId,
    clientId: route.params.clientId
  }
  client.value = await fetClientData(payload) || null
})

</script>

<template>
  <div class="pb-3">
    <client-search />
  </div>

  <div class="flex gap-5">
    <div class="shadow-lg bg-white-normal h-[250px] p-3 w-[50%] rounded-sm">
        <div v-if="hasClient" class="flex items-center justify-between">
          <div>
            <client-info-summary :client="client"/>
          </div>

          <div class="p-3 flex items-center flex-col gap-3 client-info-action">
            <Button>Edit</Button>
            <Button>Family</Button>
            <Button>Consent Form</Button>
          </div>

        </div>
        <div class="h-[60px] border border-[#e6e6e6]" v-if="hasClient">
      </div>
    </div>

    <div class="shadow-lg bg-white-normal h-[250px] w-[50%] rounded-sm p-3">
      <div v-if="hasClient" class="flex justify-between flex-col h-full">
      <client-data-summary :client="client"/>

      <div class="btn-action flex items-center gap-3 justify-between flex-wrap">
        <Button>Add Sales</Button>
        <Button>Add Refund</Button>
        <Button v-if="hasClient">Add Photos</Button>
      </div>
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

.btn-action {

}
</style>
