import { MarkdownTheme, MarkdownPageEvent, MarkdownThemeContext } from 'typedoc-plugin-markdown';

export function load(app) {
  app.renderer.on(MarkdownPageEvent.END, (page) => {
    page.contents = page.contents.replace(/## Default/g, '## 默认值:');
    page.contents = page.contents.replace(/## Usage/g, '## 用法:');
    page.contents = page.contents.replace(/## Deprecated/g, '## 已弃用:');

    switch (page.model.name) {
      case 'Oml2dProperties':
        page.contents = page.contents.replace(/## Properties/g, '## 属性:');
        break;
      case 'Oml2dMethods':
        page.contents = page.contents.replace(/## Properties/g, '## 方法:');
        break;
      case 'Oml2dEvents':
        page.contents = page.contents.replace(/## Properties/g, '## 事件:');
        break;
      default:
        page.contents = page.contents.replace(/## Properties/g, '## 选项:');
        break;
    }
  });

  app.renderer.defineTheme('themeExpand', MyMarkdownTheme);
}

class MyMarkdownTheme extends MarkdownTheme {
  constructor(renderer) {
    super(renderer);
  }
  getRenderContext(page) {
    return new MyMarkdownThemeContext(this, page, this.application.options);
  }
}

class MyMarkdownThemeContext extends MarkdownThemeContext {
  // customise partials
  partials = {
    ...this.partials,
    pageTitle: () => {
      switch (this.page.model.name) {
        case 'MenusOptions':
          return '菜单选项';
        case 'Options':
          return '公共选项';
        case 'StatusBarOptions':
          return '状态条选项';
        case 'TipsOptions':
          return '提示框选项';
        case 'ModelOptions':
          return '模型选项';
        case 'loadOml2d':
          return '组件加载';
        case 'Oml2dProperties':
          return '实例对象中的属性';
        case 'Oml2dMethods':
          return '实例对象中的方法';
        case 'Oml2dEvents':
          return '实例对象中的事件';
        default:
          return '';
      }
    }
  };
}
