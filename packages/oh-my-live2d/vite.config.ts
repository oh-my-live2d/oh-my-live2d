import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';

import project from './package.json';

// const { OML_ENV } = process.env;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(project.version)
    // __ENV__: JSON.stringify(OML_ENV)
  },
  build: {
    emptyOutDir: false,
    lib: {
      name: 'OML2D',
      formats: ['es', 'umd'],
      entry: path.resolve(__dirname, './src/index.ts'),
      fileName: (format) => `index.${format === 'umd' ? 'min.js' : 'js'}`
    },
    target: 'es6'
    // copyPublicDir: false
    // rollupOptions: {
    //   output: {
    //     chunkFileNames: 'oml2d.app.js'
    //   }
    // }
  }
  // plugins: [
  //   cp({
  //     targets: [{ src: './dist/index.min.js', dest: '../../tests/vite-app/public' }]
  //   })
  // ]
});
