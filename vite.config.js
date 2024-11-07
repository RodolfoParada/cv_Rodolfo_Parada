import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
 base: 'https://github.com/RodolfoParada/cv_Rodolfo_Parada',
  plugins: [vue()],
  server: {
    port: 5174,  // Cambia el puerto a 5174
  },
})