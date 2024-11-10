<script setup>
import Modal from './../../Modal/Modal.vue'

// Vue
import { onMounted, reactive, watch } from 'vue';
import { useClient } from '../../../composable/useClient';
import { authStore } from '../../../store';

// State
const isShowClientSearch = ref(false)
const clients = reactive([])
const clientSearchFilter = reactive({
  pageNumber: 1,
  pageSize: 10,
  searchCondition: 3,
  searchInBranch: false,
  searchValue: '',
  shopId: shop.value.shopId
})

const { shop } = authStore()
const { fetClientSearch } = useClient()
// Watch
watch((isShowClientSearch.value), () => {
  if(isShowClientSearch) {
    const clientDataResponse = await fetClientSearch()
    clients = clientDataResponse?.data?.result?.items || []
  }
} )

// Life cycle
onMounted(() => {
  console.log('filter data', clientSearchFilter)
})
// Computed

// Methods
</script>

<template>
  <Modal
    :visible="isShowClientSearch"
    :title="'Client Search'"
    size="lg"
  >
    <div class="overflow-auto">
      <table>
        <thead>
          <tr>
            <th>Client Number</th>
            <th>Client Name</th>
            <th>Mobile Phone</th>
            <th>Client Rating / Group</th>
            <th>Client Preferred Staff</th>
            <th>Birthday</th>
            <th>Recent Visit Date</th>
            <th>Notes</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="client in clients" :key="client.clientId">
            <td>{{ client.clientName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Modal>
</template>
