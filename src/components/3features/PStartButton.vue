<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button class="p-start-button">
    {{ text }}
  </button>
</template>

<style lang="scss">
.p-start-button {
  background: #1F883D;
  border-radius: 10px;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 16px;
  padding: 12px 16px;
  border: 0;
  cursor: pointer;
}
</style>