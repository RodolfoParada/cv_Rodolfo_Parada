<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="container">
    <div class="contenido">
      <div>
       <router-view /> 
    </div>
  </div>
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.container{
   display: flex;
  flex-direction: column;
}
.contenido {
    margin-bottom: 80px ;
    padding-bottom: 90px;

}


</style>
