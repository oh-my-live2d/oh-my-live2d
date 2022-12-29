import { defineConfig } from 'vite';
import { resolve } from 'path';
import project from './package.json';
export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(project.version)
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'OML',
      fileName: 'index'
    }
  }
});
