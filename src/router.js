
import { createRouter, createWebHistory } from 'vue-router';
import QuienSoy from './Vistas/QuienSoy.vue'
import Experiencia from './Vistas/Experiencia.vue';
import Formacion from './Vistas/Formacion.vue';
import Proyectos from './Vistas/Proyectos.vue'
import PaginaSoyUno from './Vistas/PaginaSoyUno.vue';
import PaginaSoyDos from './Vistas/PaginaSoyDos.vue';


const routes = [
  {
    path: '/',
    name: 'QuienSoy',
    component: QuienSoy,
  },
  {
    path: '/experiencia',
    name: 'Experiencia',
    component: Experiencia,
  },
   {
     path: '/formacion',
     name: 'Formación',
     component: Formacion,
  },
    {
      path: '/proyectos',
      name: 'Proyectos',
      component: Proyectos,
  },
      {
        path: '/paginaSoyUno',
        name: 'PaginaSoyUno',
        component: PaginaSoyUno,
  },
       {
        path: '/paginaSoyDos',
        name: 'PaginaSoyDos',
        component: PaginaSoyDos,
  },
  
       
  // Puedes agregar más rutas aquí
];

const router = createRouter({
  history: createWebHistory('#'),
  routes,
});

export default router;