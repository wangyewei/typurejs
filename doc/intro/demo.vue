<template>
  <div class="wrapper">
    <button @click="countAdd">Count is: {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let count = ref<number>(0)

function countAdd() {
  count.value++
}
</script>

<style scoped>
.wrapper {
  /* background: ; */
  box-shadow: var(--vp-shadow-3);
  padding: 17px 27px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
button {
  border: 1px solid var(--vp-button-alt-border);
  background: var(--vp-button-alt-bg);
  padding: 6px;
  border-radius: 8px;
  color: var(--vp-button-alt-color);
  font-weight: 500;
}
</style>
