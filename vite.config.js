import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
 // base: '/cv_rodolfo_parada/',
  plugins: [vue()],
  server: {
    port: 5174,  // Cambia el puerto a 5174
  },
})