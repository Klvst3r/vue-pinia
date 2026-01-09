<script setup>
import { useCounterStore } from '@/stores/counter'

//con esto se inicializa la tienda
const counterStore = useCounterStore()
</script>
<template>
  <button @click="counterStore.count--">-</button>

  <span> {{ counterStore.count }}</span>

  <button @click="counterStore.count++">+</button>
</template>
<style scoped></style>
