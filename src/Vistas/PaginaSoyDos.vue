<script setup>
import Navegacion from "../components/Navegacion.vue";
import axios from "axios";
import { ref, onMounted, computed } from "vue";

// Reactividad y variables
const descripcionTres = ref(null);
const descripcionCuatro = ref(null);
const descripcionCinco = ref(null);

const fetchDescripcion = async (field) => {
  try {
    //const response = await axios.get("http://localhost:8080/quienSoy");
    // const response = await axios.get("https://curriculum-rodolfo-parada-api.onrender.com/quienSoy");
    const response = await axios.get("/api/quienSoy");
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
  descripcionTres.value = await fetchDescripcion("descripcionTres");
  descripcionCuatro.value = await fetchDescripcion("descripcionCuatro");
  descripcionCinco.value = await fetchDescripcion("descripcionCinco");
});

const descargarPDF = async () => {
  // Importar el archivo PDF
  const pdfUrl = await import('../assets/curriculumMarketing/CV_Rodolfo_Parada_Marketing.pdf');
  
  const link = document.createElement('a');
  link.href = pdfUrl.default; // Acceder a la exportación por defecto
  link.target = '_blank';
  link.download = 'curriculum-RodolfoParada-Marketing.pdf';
  link.type = 'application/pdf';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
<template>
 
  <div class="container mt-5 texto col-sm col-md col-ld col-xl" style="margin-top: 180px;">
    <Navegacion></Navegacion>
   <div class="container mt-5 texto"
        style="display: flex; align-items: flex-start; 
        justify-content: flex-start; gap: 20px;">
  <div class="d-flex flex-wrap ">
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
        <h2 class="card-text text-center pb-1 subtitulo-imagen mt-4">
          Ingeniero en Administración mención marketing
        </h2>
      </div>
    </div>
    <div style="flex: 1; margin-left: 20px;">
      
      <div v-if="descripcionTres">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <div style="text-align: center;">
              <span class="texto" style="display: inline-block; 
              text-align: justify;">{{ descripcionTres }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Cargando...</p>
      </div>


      
      <div class="mt-5" v-if="descripcionCuatro">
        <div class="card positionCuatro">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <div>
              <pre class="texto">{{ descripcionCuatro }}</pre>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Cargando...</p>
      </div>
    </div>




    
  </div>
</div>


 <div class="container d-flex justify-content-center mt-5 texto col-sm col-md col-ld col-xl">
   <div class="video">
      <div class="" >
        <iframe src="https://player.vimeo.com/video/1026021666?title=0&amp;
        byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;
        player_id=0&amp;app_id=58479" 
        width="1280" height="720" frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
        title="Rodolfo_Parada."></iframe>
      </div>
    </div>
    </div>
 
 <div class="container d d-flex justify-content-center mt-5">
     <div style="flex: 1; display: flex; align-items: flex-start; gap: 10px;"> 
    <a @click="descargarPDF" class="cv color-descargas rounded-pill" download="Descarga Curriculum">
     Descargar Curriculum
    </a>
       <div v-if="descripcionCinco" style="flex: 1; margin-left: 110px">
        <div class="card mb-5">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <div >
              <span class="texto" style="display: inline-block;
                     text-align: justify;">{{ descripcionCinco }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Cargando...</p>
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
  font-family: "Oswald", sans-serif !important;
  border: 1px solid #ccc;
  background-color: #E4EEFB;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.card-marketing{
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
.cv{
  margin-top: 60px;
  margin-left: 100px;
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
.positionCuatro{
 width: 365px;
 margin-left: 150px; 
 margin-top:100px;
}

</style>
