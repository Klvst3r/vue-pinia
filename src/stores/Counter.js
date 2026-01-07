import { defineStore } from 'pinia'

// export const useCounterStore = defineStore("counter", {
//   state: () => ({
//     count: 0,
//   }),
//   actions: {
//     increment(..
// })

//Sintaxis de optionAPI, segundo parametro un objeto
// Definimos variables, metodos y propiedades, la sintaxis es:
// const useCounterStore = defineStore('counter', {
//   //Variables
//   state: () => ({
//     count: 0,
//   }),
//   //Metodos
//   getters: {
//     doubleCount: (state) => state.count * 2,
//     tripleCount: (state) => state.count * 3,
//   },
//   //Propiedades computadas
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })

//Sintaxis de compositionAPI, no se definen states, getters, actions
// Se elimina y en su reemplazo en lugar de un objeto se pasa una funcion flecha

//Exportar la constante para utilizarla en algun componente
// const useCounterStore = defineStore('counter', () => {
//   //Variables
//   const count = ref(0)

//   //Metodos
//   const increment = () => {
//     count.value++
//   }
//   const decrement = () => {
//     count.value--
//   }

//   //Propiedades computadas
//   //   const doubleCount = computed(() => count.value * 2),
//   //   const tripleCount = computed(() => count.value * 3)

//   return { count, increment, decrement }
// })

//Se recomienda utilizar una funcion en lugar de un objeto.
export const useCounterStore = defineStore('counter', () => {
  //Variables
  //Metodos
  //Propiedades computadas
})
