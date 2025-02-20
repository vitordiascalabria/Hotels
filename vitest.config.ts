import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./tests/**/*.spec.ts'],  
    exclude: ['node_modules', 'dist'], 
    coverage: {
      reporter: ['text', 'html'], 
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url)),  // Alias para a raiz do projeto
    },
  },
  
});
