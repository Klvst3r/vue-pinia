<script setup>
import MyCounter from '@/components/MyCounter.vue' //Se importo al hacer referencia en el template

// Se importa la tienda creada
//import { useCounterStore } from './stores/Counter.js' //LAs llaves es cuando tengamos que importar mas de una variable

//La importación puede ser asi:
// import useCounterStore  from './stores/Counter.js'

// Se instancia la tienda
//const counterStore = useCounterStore()

// Ya podemos ineractuar con la tienda
</script>

<template>
  <div>
    <MyCounter></MyCounter>
    <!-- Se uso el componente importado -->
  </div>
  <div>
    <MyCounter></MyCounter>
  </div>
  <!-- Puedo duplicarlo -->
</template>

<style scoped></style>
