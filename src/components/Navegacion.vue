<script>
import Buscador from '../components/Buscador.vue'
export default {
  name: 'Navegacion',
  components: {
    Buscador, // Declara el componente Buscador
  }
};
</script>

<template>
  <div>
   
    <nav class="navbar navbar-expand-lg navbar-light fixed-top color ">
  <div class="container-fluid">
    <a class="titulo-rodolfo" href="#"><b>Rodolfo Parada González</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
      
          <li class="nav-item active ">
         <router-link class="nav-link quienSoy" aria-current="page" to="/">Quien Soy</router-link>
        </li>

        <li class="nav-item">
         <router-link class="nav-link experiencia" aria-current="page" to="/experiencia">Experiencia</router-link>
        </li>

          <li class="nav-item">
         <router-link class="nav-link formacion" aria-current="page" to="/formacion">Formación</router-link>
        </li>

          <li class="nav-item">
         <router-link class="nav-link proyectos" aria-current="page" to="/proyectos">Proyectos</router-link>
        </li>

      </ul>
      <Buscador></Buscador>
    </div>
  </div>
</nav>
  </div>
</template>
<style>
  .navbar {
    margin-bottom: 0; /* Asegúrate de que no haya espacio debajo de la navbar */
  }
  .color{
      background-color:#394476;
   color:#F0F6FD;
  }
  .titulo-rodolfo{
     color:#F0F6FD;
      text-decoration: none;
  }
  .titulo-rodolfo:hover{
    color:#95AEE9;
  }
   .navbar-nav .quienSoy{
     color:#F0F6FD;
    
  }
   .nav-item .experiencia{
     color:#F0F6FD;
     text-decoration: none;
  }
   .navbar-nav .formacion{
     color:#F0F6FD;
     text-decoration: none;
  }
   .nav-item .proyectos{
     color:#F0F6FD;
     text-decoration: none;
  }
 .nav-item .nav-link {
    color: #F0F6FD; /* Asegurarte que el color se aplique a todos los enlaces */
    text-decoration: none; /* Eliminar subrayado */
  }
  .navbar-nav  .nav-link:hover {
    color: #95AEE9; /* Opcional: cambiar color al pasar el mouse */
  }
</style>
