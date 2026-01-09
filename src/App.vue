<script setup>
// Se importa la tienda creada
import { useCounterStore } from './stores/Counter.js' //LAs llaves es cuando tengamos que importar mas de una variable

//La importación puede ser asi:
// import useCounterStore  from './stores/Counter.js'

// Se instancia la tienda
const counterStore = useCounterStore()

// Ya podemos ineractuar con la tienda
</script>

<template></template>

<style scoped></style>
