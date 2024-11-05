<template>
  <div class="paginacion">
    <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
    <span>Página {{ currentPage }} de {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 2 // Cambia este valor según cuántas descripciones deseas mostrar por página
  }
});

const emit = defineEmits();
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    emit('page-changed', currentPage.value);
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit('page-changed', currentPage.value);
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
