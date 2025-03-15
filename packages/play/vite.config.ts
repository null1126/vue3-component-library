import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../'),
      '@x-ui': resolve(__dirname, '../components')
    }
  },
  optimizeDeps: {
    include: ['vue']
  },
  server: {
    port: 3000
  }
})
