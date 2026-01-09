<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>
<template>
  <button @click="useCounterStore.count--">-</button>
  <span>{{ useCounterStore.count }}</span>
  <button @click="useCounterStore.count++">+</button>
</template>
<style scoped></style>
