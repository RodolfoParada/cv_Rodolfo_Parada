<script setup>
import Navegacion from "../components/Navegacion.vue";
import PaginaSoyUno from "./PaginaSoyUno.vue";
import PaginaSoyDos from "./PaginaSoyDos.vue";
import { ref, computed, onMounted } from "vue";
import Footer from "../components/Footer.vue"

const currentPage = ref(1); // Página actual
const totalPages = 2; // Total de páginas

// Método para cambiar a la siguiente página
const nextPage = () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
  }
};

// Método para volver a la página anterior
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Computed para determinar qué componente renderizar
const currentComponent = computed(() => {
  return currentPage.value === 1 ? PaginaSoyUno : PaginaSoyDos;
});

onMounted(() => {

  const body = document.body;
  body.style.backgroundColor = '#95AEE9';

});

</script>

<template>
  <div class="container texto">
    <Navegacion></Navegacion>
    <div class="contenido">
      <h1 class="titulo">¿Quién Soy?</h1>

      <component :is="currentComponent"></component> <!-- Renderiza el componente actual -->
      <div>
        <button class="button-color text-white rounded-pill px-2 py-2" @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span class="text-white p-3">Página {{ currentPage }} de {{ totalPages }}</span>
        <button class="button-color text-white rounded-pill px-2 py-2" @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>
    </div>
    <Footer></Footer>
    </div>
</template>

<style scoped>
.texto{
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  font-size: 17px;
}
.container {
  display: flex;
  flex-direction: column;
}
.contenido {
  margin-top: 40px;
  padding-bottom: 80px;
}

.titulo {
  margin: 0px;
  color: #3F4b94;
}


.text-justify-center {
  font-size: 16px;
  line-height: 1.5;
  margin: 10px;
  padding: 15px;
}

button {
 
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #3F4b94;
}

.button-color{
   background-color:#4b58b7;
   max-width: 400px;
   height: 40px;
   margin-top: 110px;
}
</style>








