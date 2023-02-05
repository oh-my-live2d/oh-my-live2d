import { defineConfig } from 'vite';
import { resolve } from 'path';
import project from './package.json';
const { OML_ENV } = process.env;
export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(project.version),
    __ENV__: JSON.stringify(OML_ENV)
  },
  build: {
    target: 'es6',
    copyPublicDir: false,
    watch: OML_ENV === 'dev' ? { include: 'src/**' } : null
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});
