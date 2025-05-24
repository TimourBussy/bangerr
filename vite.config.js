import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './src/main.css',
      output: {
        assetFileNames: 'assets/[name].css',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
      }
    },
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  server: {
    hmr: {overlay: false}
  }
})