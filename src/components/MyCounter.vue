<script setup>
import { useCounterStore } from '@/stores/counter'

//con esto se inicializa la tienda
const counterStore = useCounterStore()
</script>
<template>
  <button @click="counterStore.decrement()">-</button>

  <span> {{ counterStore.count }}</span>

  <button @click="counterStore.increment()">+</button>
</template>
<style scoped></style>
