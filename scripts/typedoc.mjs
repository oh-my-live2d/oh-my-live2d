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

fs.ensureDirSync(docsPath);

json2md.converters.mdContent = function (input, json2md) {
  return input;
};

// 根目录
function rootPath(...args) {
  return path.join(__dirname, '..', ...args);
}

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

  const getOptionsData = (project) => {
    let optionsData;
    project.children.forEach((item) => {
      if (item.name === 'Options') {
        optionsData = item;
      }
    });

    return optionsData;
  };

  const formatData = (data) => {
    const newData = data.map((item) => {
      if (item.children && item.children.length) item.children = formatData(item.children);
      return {
        id: item.id,
        flags: item.flags,
        comment: item.comment,
        name: item.name,
        children: item?.children,
        type: item.type
      };
    });
    return newData;
  };

  const getDocsDataItem = (data, project) => {
    const finalData = [];
    data.children?.map((item) => {
      // console.log(item);
      if (
        (item.type.type === 'reference' && item.type.package === 'oh-my-live2d') ||
        (item.type.type === 'array' && item.type?.elementType?.type === 'reference' && item.type?.elementType.package === 'oh-my-live2d')
      ) {
        let kind;
        if (item.type.type === 'array') {
          kind = item.type.elementType.target;
        } else {
          kind = item.type.target;
        }

        const res = project.children.find((item) => item.id === kind);

        finalData.push(res);
      }
    });
    return finalData;
  };

  // 判断是否为监听模式
  if (process.argv.includes('-w') || process.argv.includes('--watch')) {
    app.convertAndWatch(async (project) => {});
  } else {
    const project = app.convert();
    app.generateJson(project, documentationPath);
    const data = fs.readJSONSync(documentationPath);

    // 处理数据-----------------------

    let optionsData = getOptionsData(data);

    const res = getDocsDataItem(optionsData, data);

    // 存到数组, 每页数据存到分别存储, 最多两级, Options 为根
    docsData = [optionsData, ...res];
    console.log(docsData);

    // --------------------- 开始生成文档
    // docsData.map((item) => {
    //   // console.log(item);
    //   let fileName = '';
    //   let markdownJsonData = [];
    //   if (item.name === 'Options') fileName = 'index.md';
    //   else fileName = `${item.name}.md`;

    //   //  文件头部信息
    //   item.comment?.summary.map((summaryItem) => {
    //     markdownJsonData.push({ mdContent: summaryItem.text });
    //   });

    //   // 分割线
    //   item.comment?.summary.length && markdownJsonData.push({ mdContent: '---' });

    //   // --------------------- 选项内容

    //   const generateOptionsContent = (content) => {
    //     content?.children?.map((optItem) => {
    //       let typeText = '';
    //       let defaultValueText = '';

    //       // let isRequire = optItem.flags.includes('Optional') ? '否' : '是';
    //       // const optHead = ['类型', '是否必须', '默认值'];

    //       // const optRows = [`\`${optItem.type.name || optItem.type.qualifiedName || optItem.type.type || '-'}\``, isRequire, '-'];
    //       markdownJsonData.push({ h3: `${optItem.name}` });

    //       optItem.comment.blockTags.map((tagItem) => {
    //         if (tagItem.tag === '@default') {
    //           let match = tagItem.content[0].text.match(/\n(.*)\n/);
    //           defaultValueText = match ? match[1] : '';
    //           defaultValueText = '`' + `${defaultValueText || '-'}` + '`';
    //           // console.log(defaultValue);
    //         }
    //       });

    //       optItem.comment.blockTags.map((tagItem) => {
    //         if (tagItem.tag === '@valueType') {
    //           typeText = `\`${tagItem.content[0].text}\``;
    //         }
    //       });

    //       typeText && markdownJsonData.push({ mdContent: `- 类型: ${typeText}` });
    //       defaultValueText && markdownJsonData.push({ mdContent: `- 默认值: ${defaultValueText}` });
    //       // markdownJsonData.push({ h4: '定义:' }, { table: { headers: optHead, rows: [optRows] } }, { mdContent: '---' });

    //       optItem.comment?.summary?.map((summaryItem) => {
    //         markdownJsonData.push({ mdContent: summaryItem?.text });
    //       });

    //       markdownJsonData.push({ mdContent: '---' });
    //       console.log(optItem.type.children);
    //       // if(content.naem !== 'Options') {

    //       // }
    //     });
    //   };

    //   generateOptionsContent(item);

    //   fs.writeFileSync(path.resolve(docsPath, fileName), json2md(markdownJsonData));
    //   console.log(path.resolve(docsPath, fileName), ' 已写入');
    // });
  }
}

main().catch(console.error);
