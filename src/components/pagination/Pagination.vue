<script setup>
import { computed } from 'vue';
const props = defineProps({
  totalItems: {
    type: Number,
    default: 1
  },

  currentPage: {
    type: Number,
    default: 1
  }
})

const currentPage = computed({
  get() {
    return props.currentPage
  },

  set(page) {
    emit('set-current-page', page)
  }
})
const emit = defineEmits(['change-page'])

const onChangePage = (value) => {
  emit('change-page', value)
}
</script>

<template>
  <vue-awesome-paginate
    :total-items="props.totalItems"
    :items-per-page="10"
    :max-pages-shown="100"
    v-model="currentPage"
    v-bind="$attrs"

    @click="onChangePage"
  />
</template>

<style>
  .pagination-container {
    display: flex;

    column-gap: 10px;
  }

  .paginate-buttons {
    height: 40px;

    width: 40px;

    border-radius: 20px;

    cursor: pointer;

    background-color: rgb(242, 242, 242);

    border: 1px solid rgb(217, 217, 217);

    color: black;
  }

  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }

  .active-page {
    background-color: #3498db;

    border: 1px solid #3498db;

    color: white;
  }

  .active-page:hover {
    background-color: #2988c8;
  }
</style>
