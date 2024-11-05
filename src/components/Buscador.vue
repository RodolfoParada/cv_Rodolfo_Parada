<!-- Buscador.vue -->
<script>
import { ref } from 'vue'; // Para la reactividad
import { useRouter } from 'vue-router'; // Para manejar la navegación

export default {
  name: 'Buscador',
  setup() {
    const searchQuery = ref(''); // Para almacenar el valor de búsqueda
    const errorMessage = ref(''); // Para manejar el mensaje de error
    const router = useRouter(); // Para manejar la navegación

    // Lista de rutas disponibles
    const routes = [
      { name: 'Quien Soy', path: '/' },
      { name: 'Experiencia', path: '/experiencia' },
      { name: 'Formación', path: '/formacion' },
      { name: 'Proyectos', path: '/proyectos' },
      { name: 'Contactame', path: '/contactame' },
      { name: 'Descarga CV', path: '/descargaCV' }
    ];

    // Método para realizar la búsqueda
    const searchRoute = (e) => {
      e.preventDefault(); // Evitar que se recargue la página al enviar el formulario
      const matchedRoute = routes.find(route => route.name.toLowerCase() === searchQuery.value.toLowerCase());

      if (matchedRoute) {
        router.push(matchedRoute.path); // Navegar a la ruta encontrada
         errorMessage.value = ''; // Limpiar el mensaje de error si se encuentra la ruta
    
      } else {
        errorMessage.value = 'Ruta no encontrada, intentente nuevamente'; // Mostrar error si no se encuentra la ruta
      
        
      }
    };

    return {
      searchQuery,
      errorMessage,
      searchRoute,
       
    };
   
  }
};
</script>

<template>
  <form class="d-flex" @submit="searchRoute">
    <input v-model="searchQuery" 
      class="form-control me-2" 
      type="search" placeholder="Ingresa el titulo del menú" 
       aria-label="Buscador"
    >
    <button class="button-color" type="submit">Buscador</button>
    <!-- Mostrar mensaje de error si la búsqueda falla -->
      <p v-if="errorMessage" class="mensaje-error">{{ errorMessage }}</p>      
  </form>
  

</template>

<style scoped>
.button-color{
    background-color: transparent;
  color:#95AEE9;
   border: 2px solid #95AEE9; 
   padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer; 
    transition: background-color 0.3s, color 0.3s;
    
}
/* Efecto hover */
.button-color:hover {
  background-color:#95AEE9; /* Fondo verde al pasar el mouse */
  color: white; /* Texto blanco al pasar el mouse */
}
.mensaje-error{
  color:#E4EEFB;
}
</style>