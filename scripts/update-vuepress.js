import path from 'node:path';
import { fileURLToPath } from 'node:url';

import fs from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const mainPkgJsonPath = path.resolve(__dirname, '../package.json');
const vuepressPluginPkgJsonPath = path.resolve(__dirname, '../packages/vuepress-plugin/package.json');
const mainPkgJson = fs.readJSONSync(mainPkgJsonPath);
const vuepressPkgJson = fs.readJSONSync(vuepressPluginPkgJsonPath);

vuepressPkgJson.dependencies['oh-my-live2d'] = mainPkgJson.version;
fs.writeJSONSync(vuepressPluginPkgJsonPath, vuepressPkgJson, { spaces: 2 });
