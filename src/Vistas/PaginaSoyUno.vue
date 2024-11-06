<script setup>
import Navegacion from "../components/Navegacion.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

// Reactividad y variables
const descripcionUno = ref(null);
const descripcionDos = ref(null);
const descripcionTres = ref(null);
const descripcionSeis = ref(null);

const fetchDescripcion = async (field) => {
  try {
     //  const response = await axios.get("http://localhost:8080/quienSoy");
    const response = await axios.get("https://curriculum-rodolfo-parada-api-1.onrender.com/quienSoy");
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

onMounted(async () => {
  descripcionUno.value = await fetchDescripcion("descripcionUno");
  descripcionDos.value = await fetchDescripcion("descripcionDos");
  descripcionTres.value = await fetchDescripcion("descripcionTres");
   descripcionSeis.value = await fetchDescripcion("descripcionSeis");
});
const descargarPDF = async () => {
  // Importar el archivo PDF
  const pdfUrl = await import('../assets/curriculumProgramacion/CV_Rodolfo_Parada_Programación.pdf');
  
  const link = document.createElement('a');
  link.href = pdfUrl.default; // Acceder a la exportación por defecto
  link.target = '_blank';
  link.download = 'curriculum-RodolfoParada-Programación.pdf';
  link.type = 'application/pdf';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
<template>
  
  <div class="container col-sm col-md col-ld col-xl texto">
    <Navegacion></Navegacion>
  <div v-if="descripcionUno" style="flex: 1;">
      <div class="card card-introduccion">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <div style="text-align: center">
            <span style="display: inline-block; text-align: justify">{{
              descripcionUno
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
  
    <div class="container mt-5 texto"
         style="display: flex; align-items: flex-start; 
         justify-content: flex-start; gap: 20px;">
    <div class="d-flex flex-wrap">
      <div class="card" style="width: 25rem; margin-right: 20px">
        <img
          src="../assets/imagenes/rodolfo1.jpg"
          alt="Descripción de la imagen"
          class="imagen"
          style="max-width: 280%"
        />
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <h1 class="card-text text-center pb-1 titulo-imagen">Rodolfo Parada</h1>
          <h2 class="card-text text-center pb-1 subtitulo-imagen"><b>Junior Full Stack</b></h2>
        </div>
      </div>
    </div>


  <div v-if="descripcionSeis" style="flex: 1;">
    <div class="card card-fullstack mb-5">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <span class="texto" style="display: inline-block;
              text-align: justify">{{ descripcionSeis }}
        </span>
      </div>
    </div>

    <!-- Contenedor para centrar el botón -->
    <div class="position-button" style="display: flex; justify-content: center;">
      <a 
        @click="descargarPDF" 
        class="cv color-descargas rounded-pill" 
        download="Descarga Curriculum">
        Descargar Curriculum
      </a>
    </div>
  </div>
  <div v-else>
    <p>Cargando...</p>
  </div>
</div>

    
<div class="container mt-4">
  <div class="row d-flex align-items-start">
    <!-- Contenedor para el video -->
    <div class="col-md-6">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe src="https://player.vimeo.com/video/1026014358?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;
                 autopause=0&amp;player_id=0&amp;app_id=58479" 
                 width="550" height="310" frameborder="0" 
                 allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                 title="Rodolfo_Parada_Vimeo">
        </iframe>
      </div>
    </div>

    <!-- Columna para la card de descripción -->
    <div class="col-md-6">
      <div v-if="descripcionDos">
        <div class="card card-programacion">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <pre class="texto">{{ descripcionDos }}</pre>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Cargando...</p>
      </div>
     </div>
   </div>
 </div>
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
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #E4EEFB;
}
.card-body {
  text-align: left;
}
.card-title {
  margin-bottom: 10px;
}
.card-programacion {
  width: 80%;
  margin-left:190px;
  margin-top: -290px;

}
.card-fullstack {
  width: 760px; 
}
.card-introduccion {
  width: 105%;
  margin-Left: 10px ;
  margin-top: 44px;
}
.video{ 
  margin-top:0;
  width: 100px;
}
.cv{
  margin-top:100px;
  width: 350px;
}
.color-descargas{
  background-color:#4b58b7;
  color:#E4EEFB;
  max-width: 120px;
  height: 50px;
  text-decoration: none;
}
.color-descargas:hover{
  background-color:#3F4b94;
}
.card-body .titulo-imagen{
  font-size: 3rem;
}
.card-body .subtitulo-imagen{
  font-size: 1.5rem;
}
.position-button{
  margin-top: -50px;
  margin-right: 480px;
}
.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  padding-bottom: 200px; /* Relación de aspecto 16:9 (9/16 = 0.5625) */
  margin-top: -20px;
  margin-bottom: -150px;
}
.embed-responsive-item {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

</style>
