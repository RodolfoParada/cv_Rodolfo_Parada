<script setup>
import Navegacion from "../components/Navegacion.vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import Footer from "../components/Footer.vue"

const proyectos = ref([]);
const cargando = ref(true);
const error = ref(null);
const itemsPorPagina = 12; // Número de proyectos por página
const paginaActual = ref(1); // Página actual

const ObtenerProyectos = async () => {
  try {
   // const response = await axios.get("http://localhost:8080/quienSoy/proyectos");

    // este endpoint funciona en local consume el enpoint de vercel
   //const response = await axios.get("https://curriculum-rodolfo-parada-api.onrender.com/quienSoy/proyectos");
   
   //este endpoint funciona en github para que en vercel pueda mostrar la información de los enpoind del backend
    const response = await axios.get("/api/quienSoy/proyectos");
   
    proyectos.value = response.data;
    console.log("Datos de proyectos:", proyectos.value);
  } catch (err) {
    console.error("Error al obtener proyectos:", err);
    error.value = "Hubo un problema al cargar los proyectos. Inténtalo más tarde.";
  } finally {
    cargando.value = false;
  }
};
// Computed para obtener los proyectos de la página actual
const proyectosPaginados = computed(() => {
  const inicio = (paginaActual.value - 1) * itemsPorPagina;
  const fin = inicio + itemsPorPagina;
  console.log('Proyectos paginados:', proyectos.value.slice(inicio, fin));  // Agrega esta línea
  console.log("Total de proyectos recibidos:", proyectos.value.length);

  return proyectos.value.slice(inicio, fin);
});
// Computed para calcular el número total de páginas
const totalPaginas = computed(() => {
  const total = Math.ceil(proyectos.value.length / itemsPorPagina);
  console.log('Total de páginas calculadas:', totalPaginas.value);
  console.log('Total de páginas:', total);  // Agrega esta línea para revisar el número de páginas
  return total;
});
// Función para cambiar de página
const cambiarPagina = (pagina) => {
  if (pagina >= 1 && pagina <= totalPaginas.value) {
    paginaActual.value = pagina;
  }
};
onMounted(ObtenerProyectos);

onMounted(() => {
  const body = document.body;
  //transition({ element: body, animation: 'animate__flipInY', duration: 500 });
  body.style.backgroundColor = '#95AEE9';
//body.style.transition = 'background-color 0.5s ease'; // Asegúrate de que la transición CSS esté configurada
});
</script>

<template>
  <div class="container texto col-sm col-md col-ld col-xl">
    <Navegacion></Navegacion>
    <div class="contenido">
      <h1 class="titulo">Proyectos</h1>
      <div v-if="cargando" class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Estamos cargando la información de Proyectos. Esto puede tardar unos minutos.</span>
        </div>
      </div>
      <div v-else>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <div class="row" v-else>
          <div class="col-md-4" v-for="proyecto in proyectosPaginados" :key="proyecto.id">
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">{{ proyecto.nombreProyecto }}</h5>
                <p class="card-text">{{ proyecto.descripcionProyecto }}</p>
                <a :href="proyecto.enlaceProyecto" class="button-color text-white rounded-pill px-4 py-2" v-if="proyecto.enlaceProyecto !== 'vacio'" target="_blank">Ir al Proyecto</a>
                <button class="btn btn-secondary" v-else disabled>En desarrollo</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Controles de paginación -->
        <nav aria-label="Paginación de proyectos">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: paginaActual === 1 }">
              <button class="page-link" @click="cambiarPagina(paginaActual - 1)" :disabled="paginaActual === 1">Anterior</button>
            </li>
            <li class="page-item" v-for="pagina in totalPaginas" :key="pagina" :class="{ active: pagina === paginaActual }">
              <button class="page-link" @click="cambiarPagina(pagina)">{{ pagina }}</button>
            </li>
            <li class="page-item" :class="{ disabled: paginaActual === totalPaginas }">
              <button class="page-link" @click="cambiarPagina(paginaActual + 1)" :disabled="paginaActual === totalPaginas">Siguiente</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  <div>
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
  margin-top: 30px;
  padding-bottom: 80px;
}
.titulo {
  color: #3F4b94;
}
.card {
  margin: 15px;
  background-color:#E4EEFB;
}
.pagination {
  margin-top: 20px;
}
.page-item.disabled .page-link {
  pointer-events: none;
}
.page-item.active .page-link {
  background-color: #3F4b94;
  border-color: #3F4b94;
}
.button-color{
  background-color:#4b58b7;
  max-width: 100px;
  height: 10px;
  text-decoration: none;
}
</style>
