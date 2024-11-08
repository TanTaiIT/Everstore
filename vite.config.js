import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    devSourcemap: true
  },
  server: {
    port: 3000
  },
  test: {
    environment: 'jsdom',  // Chạy tests trong môi trường giống như trình duyệt
    globals: true,  // Sử dụng các biến toàn cục như `describe`, `it`, `expect`
    transformMode: {
      web: [/\.vue$/],  // Xử lý file .vue với Vite
    },
    alias: {
      '@': resolve(__dirname, './src'),  // Thiết lập alias cho các đường dẫn
    },
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
