<template>
  <footer class="footer text-white py-4 fixed-bottom">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        
        <!-- Lista izquierda -->
        <div class="col-3 text-center">
            <a><img src="../assets/imagenes/react.png" class="img-item" style="width:30px; height:30px ;" alt=""></a>
               <a href="">
              <img src="../assets/imagenes/angular.png" class="img-item" style="width:30px; height:30px ;" alt="">
            </a>
            <a href="">
              <img src="../assets/imagenes/vue.png" class="img-item" alt="">
            </a>
             <a href="">
              <img src="../assets/imagenes/javascripts.png" class="img-item" style="width:30px; height:30px ;" alt="">
            </a>
        </div>

        <!-- Sección de contacto (Centro) -->
        <div class="col-6 text-center titulo-color">
          <h5>Contactame</h5>
          <p>
            <a href="https://www.linkedin.com/in/rodolfoparada/" target="_blank" rel="link">
              <img src="../assets/imagenes/linkedin.jpg" alt="Imagen de contacto" class="img-linkedin">
            </a>
            <a href="https://github.com/RodolfoParada" target="_blank" rel="github">
              <img src="../assets/imagenes/github.png" alt="Imagen de contacto" class="img-github">
            </a>
          </p>
        </div>

        <!-- Lista derecha -->
        <div class="col-3 text-center">
         <a href="">
              <img src="../assets/imagenes/springboot.png" class="img-item" style="width:30px; height:30px ;">
            </a>
             <a href="">
              <img src="../assets/imagenes/node.png" class="img-item" style="width:30px; height:30px ;">
            </a>
             <a href="">
              <img src="../assets/imagenes/mysql.png" class="img-item" style="width:30px; height:30px ;">
            </a>
            <a href="">
              <img src="../assets/imagenes/bootstrap.png" class="img-item" style="width:30px; height:30px ;">
            </a>
        </div>
      </div>

      <!-- Línea de copyright -->
      <div class="text-center">
        <p>&copy; 2024 Rodolfo Parada González. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: #394476;
  color: #F0F6FD;
  height: 125px;
  text-align: center;
  margin: 0;
}

.titulo-color {
  color: #E4EEFB;
}

.img-linkedin, .img-github, .img-item {
  width: 30px;
}


.img-item {
  width: 30px;
  height: 30px;
  margin: 0 10px; /* Espacio horizontal entre imágenes */
}

@media (max-width: 579px) {
  .footer {
    height: 168px; /* Ajusta la altura a tus necesidades */
    padding: 0px 0; /* Agrega un poco de espacio interno para aumentar la altura */
    text-align: center; /* Centra el contenido en el footer */
  }
}
</style>
