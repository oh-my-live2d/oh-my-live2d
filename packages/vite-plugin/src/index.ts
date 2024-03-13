import fs from 'fs';
import path from 'path';

import { stringify } from 'javascript-stringify';
import type { Options } from 'oh-my-live2d';
import type { IndexHtmlTransformResult, PluginOption } from 'vite';

import { getModuleDir } from './utils.js';
/**
 * oh-my-live2d 的vite插件
 * 详见: https://oml2d.com
 * @param options
 * @returns
 */
export const oml2d = (options: Options = {}): PluginOption => {
  return {
    name: 'vite-plugin-oh-my-live2d',
    enforce: 'pre',
    transformIndexHtml(): IndexHtmlTransformResult | void | Promise<IndexHtmlTransformResult | void> {
      const oml2dModuleDir = getModuleDir('oh-my-live2d');
      const res = fs.readFileSync(path.join(oml2dModuleDir!, 'dist/index.min.js'));

      return [
        {
          tag: 'script',
          attrs: {
            type: 'text/javascript'
          },
          children: res.toString(),
          injectTo: 'body-prepend'
        },
        {
          tag: 'script',
          children: `OML2D.loadOml2d(${stringify(options)});`,
          attrs: {
            type: 'text/javascript'
          },
          injectTo: 'body-prepend'
        }
      ];
    }
  };
};
