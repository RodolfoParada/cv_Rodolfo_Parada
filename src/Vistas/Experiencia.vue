<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navegacion from "../components/Navegacion.vue";
import Footer from "../components/Footer.vue"
const experiencias = ref([]); // Cambia a un arreglo para almacenar múltiples experiencias
const girar = ref([]); // Nueva referencia para controlar la rotación
const currentIndex = ref(0); // Índice de la experiencia actual

const obtenerExperienciasUno = async () => {
  try {
   //  const response = await axios.get( "http://localhost:8080/quienSoy/experiencia");
   const response = await axios.get("https://curriculum-rodolfo-parada-api-1.onrender.com/quienSoy/experiencia");
    experiencias.value = response.data; // Asignar la respuesta a la referencia
    console.log("Datos de experiencias:", experiencias.value);
  } catch (error) {
    console.error("Error al obtener experiencias:", error);
  }
};
// Función para avanzar en el slider
const moveNext = () => {
  currentIndex.value = (currentIndex.value + 1) % experiencias.value.length; // Aumentar el índice, volviendo al inicio si es necesario
};

// Función para alternar la rotación
const alternarRotacion = (index) => {
  girar.value[index] = !girar.value[index]; // Cambiar solo la tarjeta actual
};

// Inicializa el array girar con el mismo tamaño que experiencias
onMounted(() => {
  girar.value = new Array(experiencias.value.length).fill(false);
  obtenerExperienciasUno();
});

onMounted(obtenerExperienciasUno);
onMounted(() => {
  const body = document.body;
  body.style.backgroundColor = '#95AEE9';
});
</script>

<template>
  <div class="container texto col-sm col-md col-ld col-xl">
    <Navegacion></Navegacion>
    <div class="contenido">
      <h1 class="titulo">Experiencia</h1>
      <div v-if="experiencias.length" class="mt-5 card-experiencia">
        <div class="card mb-3 m-2">
          <img :src="experiencias[currentIndex].logo" 
          alt="Logo de {{ experiencias[currentIndex].empresa }}" 
          class="card-img-top imagenes" 
           :class="{ rotar: girar[currentIndex] }"
           @mouseenter="alternarRotacion(currentIndex)" 
            @mouseleave="alternarRotacion(currentIndex)"
           />
           <div class="card-body ">
            <h4 class="card-title">
              {{ experiencias[currentIndex].fecha }} en 
              {{ experiencias[currentIndex].cargo }} 
              ({{ experiencias[currentIndex].empresa }})
            </h4>
            <p><strong>Cargo:</strong> {{ experiencias[currentIndex].cargo }}</p>
            <p><strong>Funciones:</strong></p>
            <ul>
              <li v-for="(funcion, fIndex) in experiencias[currentIndex].funciones" :key="fIndex">
                {{ funcion }}
              </li>
            </ul>
            <p><strong>Logros:</strong></p>
            <ul>
              <li v-for="(logro, lIndex) in experiencias[currentIndex].logros" :key="lIndex">
                {{ logro }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Cargando curriculum...</p>
      </div>      
      <div class="navigation-buttons justify-content-center" >
          <button class="button-color button-color text-white rounded-pill px-3 py-1" 
                  @click="moveNext">Siguiente
          </button>
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
  justify-content: center; 
}
.contenido {
  margin-top: 40px;
  padding-bottom: 80px; 
}
.titulo {
  margin: 0px;
   color: #3F4b94;
}
.card {
  width: 540px;
  height: 590px; /* Ajusta este valor según sea necesario */
  overflow: hidden; /* Oculta el contenido que desborda */
  background-color: #E4EEFB;
}
.card-body {
  text-align: left; /* Cambia a 'center' para centrar el texto */
  display: flex;
  flex-direction: column; /* Colocar los elementos en columna */
  justify-content: space-between; /* Distribuir el espacio entre los elementos */
  height: 100%; /* Usar toda la altura disponible */
}
ul {
  list-style-type: none; /* Elimina los puntos de las listas */
  padding: 0; /* Elimina el padding por defecto */
}
.imagenes {
  width: 100px; /* Ajusta según tus necesidades */
  height: 100px; /* Ajusta según tus necesidades */
  object-fit: cover; /* Mantiene la proporción */
}
.rotar {
  transform: rotateY(180deg); /* Rotación horizontal */
}
.card-experiencia {
  display: block;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
}
.navigation-buttons {
  display: flex;
  justify-content: space-between; /* Distribuir los botones */
  margin-top: 20px;
}
.button-color{
   background-color:#4b58b7;
   max-width: 100px;
   height: 40px;
}

</style>
