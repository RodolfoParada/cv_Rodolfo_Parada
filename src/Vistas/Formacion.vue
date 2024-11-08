<script setup>
import Navegacion from "../components/Navegacion.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import Footer from "../components/Footer.vue"
const formaciones = ref([]); // Arreglo para almacenar las experiencias
const timelineRef = ref(null);
let scrollInterval = null;
const obtenerFormaciones = async () => {
  try {
    // const response = await axios.get("http://localhost:8080/quienSoy/formacion");
    // const response = await axios.get("https://curriculum-rodolfo-parada-api.onrender.com/quienSoy/formacion");
    const response = await axios.get("/api/quienSoy/formacion");
    formaciones.value = response.data; // Asignar la respuesta a la referencia
    console.log("Datos de formaciones:", formaciones.value);
  } catch (error) {
    console.error("Error al obtener formaciones:", error);
  }
};
// Desplazamiento continuo hacia la derecha
const startScrollRight = () => {
  stopScroll(); // Detener cualquier desplazamiento previo
  scrollInterval = setInterval(() => {
    if (timelineRef.value) {
      timelineRef.value.scrollBy({
        left: 10, // Cantidad ajustada para desplazamiento más controlado
        behavior: "auto",
      });
    }
  }, 20); // Intervalo ajustado para un desplazamiento más fluido
};
// Desplazamiento continuo hacia la izquierda
const startScrollLeft = () => {
  stopScroll(); // Detener cualquier desplazamiento previo
  scrollInterval = setInterval(() => {
    if (timelineRef.value) {
      timelineRef.value.scrollBy({
        left: -10, // Cantidad ajustada para desplazamiento más controlado
        behavior: "auto",
      });
    }
  }, 20); // Intervalo ajustado para un desplazamiento más fluido
};
// Desplazamiento instantáneo al hacer clic
const scrollLeftClick = () => {
  if (timelineRef.value) {
    timelineRef.value.scrollBy({
      left: -300, // Desplazamiento ajustado para el clic
      behavior: "smooth",
    });
  }
};

const scrollRightClick = () => {
  if (timelineRef.value) {
    timelineRef.value.scrollBy({
      left: 300, // Desplazamiento ajustado para el clic
      behavior: "smooth",
    });
  }
};
// Detener desplazamiento continuo
const stopScroll = () => {
  if (scrollInterval) {
    clearInterval(scrollInterval);
    scrollInterval = null;
  }
};

onMounted(obtenerFormaciones);
onMounted(() => {
  const body = document.body;
  body.style.backgroundColor = "#95AEE9";

});
</script>

<template>
  <div class="container texto col-sm col-md col-ld col-xl">
    <Navegacion></Navegacion>
    <div class="contenido">
      <h1 class="titulo">Formación</h1>
    </div>
    <div v-if="formaciones.length" mt-5 class="timeline-wrapper">
      <div ref="timelineRef" class="timeline-container mb-5 rounded-3">
        <div
          v-for="(formacion, index) in formaciones"
          :key="index"
          class="timeline-item"
        >
          <div class="timeline.dot">
            <div class="card-timeline"></div>

            <img
              :src="formacion.logo"
              class="card-img-top imagenes"
              alt="Logo de formación"
            />
            <p>
              <b>{{ formacion.fecha }} </b> - {{ formacion.titulo }}
            </p>
            <p><strong>Titulación:</strong> {{ formacion.titulo }}</p>
            <p v-if="formacion.duracion">
              <strong>Duración:</strong> {{ formacion.duracion }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Cargando Formación...</p>
    </div>
    <div class="">
      <button
        @mousedown="startScrollLeft"
        @mouseup="stopScroll"
        @mouseleave="stopScroll"
        @click="scrollLeftClick"
        class="scroll-button left button-color text-white rounded-pill px-4 py-2"
      >
        Anterior
      </button>
      <button
        @mousedown="startScrollRight"
        @mouseup="stopScroll"
        @mouseleave="stopScroll"
        @click="scrollRightClick"
        class="scroll-button right button-color text-white rounded-pill px-2 py-2"
      >
        Siguiente
      </button>
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
  margin-top: -90px;
  flex-direction: column;
}
.contenido {
  margin-top: 25px;
  padding-bottom: 80px;
}
.titulo {
  margin: 0px;
  text-align: center;
  color: #3F4b94;
}
.imagenes {
  width: 100px; /* Ajusta según tus necesidades */
  height: 100px; /* Ajusta según tus necesidades */
  object-fit: cover; /* Mantiene la proporción */
  margin-bottom: 30px;
}
/* Estilos para centrar la línea de tiempo */
.timeline-wrapper {
  display: flex;
  align-content: center; /* Centra el contenedor en la pantalla */
  margin-top: 40px;
  position: relative;
  width: 1290px;
}
/* Estilos para la línea de tiempo */
.timeline-container {
  background-color: #fff; /* Este color debe ser visible sobre el fondo */
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #E4EEFB;
  overflow-x: auto; /* Para permitir scroll horizontal si es necesario */
  padding: 20px 0;
  position: relative;
  margin: 0px;
  right: 50px;
  gap: -60px;
}
.timeline-container::-webkit-scrollbar {
  display: none; /* Oculta el scrollbar en navegadores basados en WebKit (Chrome, Safari) */
}
.timeline-container {
  -ms-overflow-style: none; /* Oculta el scrollbar en Internet Explorer y Edge */
  scrollbar-width: none; /* Oculta el scrollbar en Firefox */
}
.timeline-item {
  display: flex;
  flex-direction: column;
  text-align: start;
  flex: 1;
  position: relative;
  margin: 0 20px; /* Espacio entre los items */
  width: 500px;
}
.timeline-dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.card-timeline {
  background-color: #fff;
  border-radius: 10px;
  padding: -20px;
  width: 400px;
  height: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-start;
}
.timeline-container::before {
  content: "";
  position: absolute;
  top: 7px; /* Ajusta la altura de la línea */
  left: 0;
  right: 0;
  height: 2px;
  background-color: #007bff; /* Color de la línea */
  z-index: -1;
}
.scroll-button {
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100px;
  margin: 0 20px;
}
.scroll-button.left {
  left: 120px;
}
.scroll-button.right {
  right: 270px;
}
.button-color{
   background-color:#4b58b7;
   max-width: 100px;
   height: 40px;
}
</style>
