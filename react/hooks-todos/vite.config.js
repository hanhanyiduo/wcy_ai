import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';// vite 工程化工具 node后端运行 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
