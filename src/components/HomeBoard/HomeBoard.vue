<template>
  <div class="w-[475px]">
    <div class="w-full px-3">
      <span :class="`h-[30px] font-mono text-[20px] px-3 flex items-center relative uppercase font-bold before:content-[''] before:h-full before:w-[5px] before:absolute before:left-0 before:bg-${labelStyleColor} before:block`">
      {{ title }}
      </span>
      <div class="h-[250px] bg-white-normal rounded-md">
        <ul v-if="data.length">
          <li v-for="item in data" :key="item.noticeId">
            {{ item.content }}sadfasdfsa
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },

  type: {
    type: Number,
    default: 1
  },

  data: {
    type: Array,
    default: []
  }
})


const messageTotal = computed(() => message.value + message2.value)

const labelStyleColor = computed(() => {
  switch(props.type) {
    case 1: {
      return 'blue-normal'
    }
    case 2: {
      return 'green'
    }
    default: {
      return 'orange'
    }
  }
})

</script>
