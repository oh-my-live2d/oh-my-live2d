const path = require('path');
const { build } = require('vite');
const entries = [
  { entry: 'src/index.ts', name: 'index' },
  { entry: 'src/oml-cubism2.ts', name: 'oml-cubism2' },
  { entry: 'src/oml-cubism4.ts', name: 'oml-cubism4' }
];

// 动态生成配置build配置选项
const profiles = entries.flatMap(({ entry, name }) => {
  return [true, 'terser'].map((minify) => ({
    build: {
      // sourcemap: true,
      emptyOutDir: false,
      minify,
      lib: {
        name: 'OML2D',
        formats: minify === 'terser' ? ['umd'] : ['es'],
        entry: path.resolve(__dirname, '..', entry),
        fileName: (format) => `${name}.${format}.js`
      },
    }
  }));
});

// 入口
async function main() {
  console.log('--- 开始构建 ---');

  // 遍历配置选项，手动调用build方法
  for (const profile of profiles) {
    await build(profile);
  }

  console.log('--- 构建结束 ---');
}

main();
