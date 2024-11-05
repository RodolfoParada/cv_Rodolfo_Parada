<template>
  <div :class="{'dark-mode': isDarkMode}" class="app-container">
    <Navegacion></Navegacion>

    <div class="container" style="margin-top: 180px;">
      <div v-if="descripcionTres" style="flex: 1; margin-left: 110px">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <div style="text-align: center;">
              <span style="display: inline-block; text-align: justify;">{{ descripcionTres }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Cargando...</p>
      </div>

      <div class="mt-5">
        <div v-if="descripcionCuatro" style="flex: 1; margin-left: 100px">
          <div class="card card-marketing">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <div>
                <pre>{{ descripcionCuatro }}</pre>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Cargando...</p>
        </div>
      </div>

      <div v-if="descripcionCinco" style="flex: 1; margin-left: 110px">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <div>
              <span style="display: inline-block; text-align: justify;">{{ descripcionCinco }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Cargando...</p>
      </div>
    </div>

    <button @click="toggleDarkMode" :class="{'active': isDarkMode}">
      {{ isDarkMode ? 'Apagar Modo Oscuro' : 'Encender Modo Oscuro' }}
    </button>
    
    <div class="overlay" v-if="isDarkMode"></div>
  </div>
</template>

<script setup>
import Navegacion from "../components/Navegacion.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

// Reactividad y variables
const descripcionTres = ref(null);
const descripcionCuatro = ref(null);
const descripcionCinco = ref(null);
const isDarkMode = ref(false); // Estado para el modo oscuro

const fetchDescripcion = async (field) => {
  try {
    const response = await axios.get("http://localhost:8080/quienSoy");
    return response.data[field];
  } catch (error) {
    handleFetchError(error);
  }
};

const handleFetchError = (error) => {
  if (error.response) {
    console.error("Error en la respuesta del servidor:", error.response.data);
    console.error("Código de estado:", error.response.status);
  } else if (error.request) {
    console.error("No se recibió respuesta:", error.request);
  } else {
    console.error("Error al configurar la solicitud:", error.message);
  }
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value; // Cambia el estado
};

onMounted(async () => {
  descripcionTres.value = await fetchDescripcion("descripcionTres");
  descripcionCuatro.value = await fetchDescripcion("descripcionCuatro");
  descripcionCinco.value = await fetchDescripcion("descripcionCinco");
});
</script>

<style scoped>
.app-container {
  position: relative; /* Asegura que la superposición se posicione correctamente */
}

.dark-mode {
  background-color: #333; /* Color de fondo oscuro */
  color: white; /* Color de texto blanco */
  transition: background-color 0.3s;
}

.overlay {
  position: fixed; /* Mantiene la superposición en la pantalla */
  top: 0;
  left: 0;
  width: 100vw; /* Ancho total de la pantalla */
  height: 100vh; /* Altura total de la pantalla */
  background-color: rgba(0, 0, 0, 0.8); /* Fondo oscuro con opacidad */
  z-index: 999; /* Mantiene la superposición por encima del contenido */
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.card-marketing {
  width: 47%;
}

.card-body {
  text-align: left;
}

.card-title {
  margin-bottom: 15px;
}

.container {
  display: flex;
  flex-direction: column;
}

.contenido {
  margin-top: 40px;
  padding-bottom: 80px;
}

.text-justify-center {
  font-size: 16px;
  line-height: 1.5;
  margin: 10px;
  padding: 15px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

button.active {
  background-color: #f44336; /* Color de fondo en modo oscuro */
}
</style>
