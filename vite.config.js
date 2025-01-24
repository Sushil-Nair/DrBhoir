import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "/index.html",
      },
    },
  },
  server: {
    historyApiFallback: {
      index: '/',
      rewrites: [
        { from: /.*/, to: '/index.html' }
      ]
    }
  },
  preview: {
    historyApiFallback: {
      index: '/',
      rewrites: [
        { from: /.*/, to: '/index.html' }
      ]
    }
  }
})
