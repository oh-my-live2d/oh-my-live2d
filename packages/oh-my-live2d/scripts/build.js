import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import fs from 'fs-extra';
import { build } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const entries = [
  { entry: 'src/index.ts', name: 'index', format: 'es' },
  { entry: 'src/index.umd.ts', name: 'index', format: 'umd' }
  // { entry: 'src/oml2d-cubism4.ts', name: 'oml2d-cubism4' }
];

// // 动态生成配置build配置选项
// const profiles = entries.flatMap(({ entry, name }) => {
//   return [true, 'terser'].map((minify) => ({
//     build: {
//       // sourcemap: true,
//       emptyOutDir: false,
//       minify,
//       lib: {
//         name: 'OML2D',
//         formats: minify === 'terser' ? ['umd'] : ['es'],
//         entry: path.resolve(__dirname, '..', entry),
//         fileName: (format) => `${name}.${format === 'umd' ? 'min.js' : 'js'}`
//       }
//     }
//   }));
// });

// 动态生成配置build配置选项
const profiles = entries.flatMap(({ entry, name, format }) => {
  return {
    build: {
      // sourcemap: true,
      emptyOutDir: false,
      lib: {
        name: 'OML2D',
        formats: [format],
        entry: resolve(__dirname, '..', entry),
        fileName: (format) => `${name}.${format === 'umd' ? 'min.js' : 'js'}`
      }
    },
    plugins: [
      {
        name: 'copy-min-file',
        writeBundle(outOptions) {
          if (outOptions.format === 'umd') {
            fs.ensureDirSync(resolve(__dirname, '../../../tests/vite-app/public'));
            fs.copyFile(resolve(__dirname, `../dist/${name}.min.js`), resolve(__dirname, `../../../tests/vite-app/public/${name}.min.js`));
          }
        }
      }
    ]
  };
});

// 入口
async function main() {
  // 遍历配置选项，手动调用build方法
  for (const profile of profiles) {
    await build(profile);
  }
}

main();
