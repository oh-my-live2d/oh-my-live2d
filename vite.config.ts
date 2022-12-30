import { defineConfig } from 'vite';
import { resolve } from 'path';
import project from './package.json';

export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(project.version)
  },
  build: {
    target: 'es6',
    // minify: true,
    // lib: {
    //   entry: 'src/index.ts',
    //   formats: ['es'],
    //   fileName: 'live2dcubism4core.js'
    // }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});
