import { defineConfig } from 'vite';
import { resolve } from 'path';
import project from './package.json';

const { OML_ENV } = process.env;
export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(project.version),
    __ENV__: OML_ENV
  },
  build: {
    target: 'es6',
    copyPublicDir: false
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
