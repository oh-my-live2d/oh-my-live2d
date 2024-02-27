import fs from 'fs-extra';
import json2md from 'json2md';
import path from 'path';
import TypeDoc from 'typedoc';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 文档数据
let docsData = [];
const docsPath = path.resolve(__dirname, '../docs/options');
const documentationPath = path.resolve(__dirname, '../docs/documentation.json');
const sideBarDataPath = path.resolve(__dirname, '../docs/sideBarData.json');

fs.ensureDirSync(docsPath);

json2md.converters.mdContent = function (input, json2md) {
  return input;
};
const getType = (typeData = {}) => {
  if (typeData.type === 'intrinsic') return `\`${typeData.name}\``;
};
// 根目录
function rootPath(...args) {
  return path.join(__dirname, '..', ...args);
}

const generateDocs = (app, project) => {
  app.generateJson(project, documentationPath).then(() => {
    let data = fs.readJSONSync(documentationPath);
    data.children = data.children.filter((item) => item.name !== 'loadOml2d');
    // 处理数据-----------------------

    // 存到数组, 每页数据存到分别存储, 最多两级, Options 为根

    // --------------------- 开始生成文档
    data.children.map((item) => {
      // console.log(item);
      let fileName = `${item.name}.md`;
      let markdownJsonData = [];
      // if (item.name === 'Options') fileName = 'index.md';
      // else fileName = `${item.name}.md`;

      //  文件头部信息
      item.comment?.summary.map((summaryItem) => {
        markdownJsonData.push({ mdContent: summaryItem.text });
      });

      // 分割线
      item.comment?.summary.length && markdownJsonData.push({ mdContent: '---' });

      // --------------------- 选项内容
      const generateOptionsContent = (content, parentName = '') => {
        content?.children?.map((optItem) => {
          let typeText = getType(optItem.type);
          let defaultValueText = '';

          markdownJsonData.push({ h3: parentName ? `${parentName}.${optItem.name}` : `${optItem.name}` });

          optItem?.comment?.blockTags?.map((tagItem) => {
            if (tagItem.tag === '@default') {
              let match = tagItem.content[0].text.match(/\n(.*)\n/);
              defaultValueText = match ? match[1] : '';
              defaultValueText = '`' + `${defaultValueText || '-'}` + '`';
            }
          });

          optItem?.comment?.blockTags?.map((tagItem) => {
            if (tagItem.tag === '@valueType') {
              typeText = `\`${tagItem.content[0].text}\``;
            }
          });

          typeText && markdownJsonData.push({ mdContent: `- 类型: ${typeText}` });
          defaultValueText && markdownJsonData.push({ mdContent: `- 默认值: ${defaultValueText}` });

          optItem.comment?.summary?.map((summaryItem) => {
            markdownJsonData.push({ mdContent: summaryItem?.text });
          });

          markdownJsonData.push({ mdContent: '---' });

          if (optItem.type.type === 'reflection') {
            generateOptionsContent(optItem.type.declaration, parentName ? `${parentName}.${optItem.name}` : optItem.name);
          }
        });
      };

      generateOptionsContent(item);

      fs.writeFileSync(path.resolve(docsPath, fileName), json2md(markdownJsonData));
      console.log(path.resolve(docsPath, fileName), ' 已写入');
    });

    data.children = data.children.sort((a, b) => {
      if (a.name === 'Options') return -1;
      if (b.name === 'Options') return 1;
      return 0;
    });

    const sideBarData = data.children.map((item) => {
      let title = '';
      // if (item.name === 'Options') title = 'index';
      // else title = item.name;
      return { text: item.comment?.blockTags?.[0]?.content?.[0]?.text || item.name, link: `/options/${item.name}` };
    });
    fs.writeJSONSync(sideBarDataPath, sideBarData);
    console.log(sideBarDataPath, ' 已写入');
  });
};

// 主函数
async function main() {
  // 初始化 TypeDoc
  const app = new TypeDoc.Application();

  // 使 TypeDoc 拥有读取 tsconfig.json 的能力
  app.options.addReader(new TypeDoc.TSConfigReader());

  // 指定代码入口
  const entries = [rootPath('src/index.ts')];

  // 指定 TypeDoc 配置项
  await app.bootstrapWithPlugins({
    entryPoints: entries,
    tsconfig: rootPath('tsconfig.json')
    // plugin: ['typedoc-plugin-markdown'],
    // allReflectionsHaveOwnDocument: true,
    // hideInPageTOC: true,
    // hideBreadcrumbs: true
    // namedAnchors: true,
    // preserveAnchorCasing: true
    // readme: 'none'
  });

  // 判断是否为监听模式
  if (process.argv.includes('-w') || process.argv.includes('--watch')) {
    app.convertAndWatch(async (project) => {
      generateDocs(app, project);
    });
  } else {
    const project = app.convert();
    generateDocs(app, project);
  }
}

main().catch(console.error);
