import path from 'node:path';
import { fileURLToPath } from 'node:url';

// import fs from 'fs-extra';
import { defineConfig } from 'vite';

import project from './package.json';

const { OML_ENV } = process.env;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(project.version),
    __ENV__: JSON.stringify(OML_ENV)
  },
  build: {
    emptyOutDir: false,
    lib: {
      name: 'OML2D',
      formats: ['es', 'umd'],
      entry: path.resolve(__dirname, './src/index.ts'),
      fileName: (format) => `index.${format === 'umd' ? 'min.js' : 'js'}`
    },
    target: 'es6',
    copyPublicDir: false,
    watch: OML_ENV === 'dev' ? { include: 'src/**' } : null,
    rollupOptions: {
      output: {
        chunkFileNames: 'oml2d.app.js'
      }
    }
  }
  // plugins: [
  //   {
  //     name: 'copy-min-file',
  //     writeBundle(outOptions) {
  //       if (outOptions.format === 'umd') {
  //         // @ts-ignore
  //         fs.copyFile(resolve(__dirname, `./dist/index.min.js`), resolve(__dirname, `../../tests/vite-app/public/index.min.js`));
  //       }
  //     }
  //   }
  // ]
});
