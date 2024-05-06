/** @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions} */

module.exports = {
  entryPoints: ['./src/index.ts'],
  out: 'docs/src',
  plugin: ['typedoc-plugin-markdown', './docs/.vitepress/theme/typedoc-theme.mjs'],
  theme: 'themeExpand',
  hideBreadcrumbs: true,
  parametersFormat: 'table',
  typeDeclarationFormat: 'table',
  textContentMappings: {
    'label.returns': '返回值类型',
    'label.name': '名称',
    'label.source': '查看源码',
    'label.extends': '继承',
    'label.implements': '实现',
    'kind.typeAlias.plural': '类型别名',
    'kind.typeAlias.singular': '类型别名',
    'kind.class.plural': '类',
    'kind.class.singular': '类',
    'kind.interface.plural': '接口',
    'kind.interface.singular': '接口',
    'kind.module.plural': '模块',
    'kind.typeParameter.plural': '类型参数',
    'kind.typeParameter.singular': '类型参数',
    'label.defaultValue': '默认值',
    'kind.function.plural': '函数',
    'kind.function.singular': '函数',
    'kind.parameter.singular': '参数',
    'kind.parameter.plural': '参数'
  },
  namedAnchors: true
};
