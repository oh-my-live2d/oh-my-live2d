import { MarkdownTheme, MarkdownPageEvent, MarkdownThemeContext } from 'typedoc-plugin-markdown';

export function load(app) {
  app.renderer.on(MarkdownPageEvent.END, (event) => {
    event.contents = event.contents.replace(/Default/g, '默认值:');
    event.contents = event.contents.replace(/Properties/g, '属性:');
    event.contents = event.contents.replace(/Usage/g, '用法:');
    event.contents = event.contents.replace(/Deprecated/g, '已弃用:');
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
        default:
          return '';
      }
    }
  };
}
