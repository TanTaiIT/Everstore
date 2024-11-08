<script setup>
// const props = defineProps(['modelValue'])
// const emit = defineEmits(['update:modelValue'])
const model = defineModel()

const update = (value) => {
  console.log('value', value.target.value)
}
</script>

<template>
  <div class="flex items-center justify-center gap-[5px]" v-bind="$attrs" v-on="$listener" >
    <input type="checkbox" id="checkbox" name="checkbox" v-model="model" class="pt-[5px] w-[20px] h-[20px] cursor-pointer">
    <slot name="label" />
  </div>
</template>

