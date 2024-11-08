<template>
  <button @click="handleClick">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>