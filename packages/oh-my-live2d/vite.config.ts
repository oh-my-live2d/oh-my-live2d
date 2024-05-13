import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import project from './package.json';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(project.version)
  },
  build: {
    emptyOutDir: true,
    lib: {
      name: 'OML2D',
      formats: ['es', 'umd'],
      entry: path.resolve(__dirname, './src/index.ts'),
      fileName: (format) => `index.${format === 'umd' ? 'min.js' : 'js'}`
    },
    target: 'es6'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [dts()]
});
