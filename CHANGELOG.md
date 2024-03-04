# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.8.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.7.3...v0.8.0) (2024-03-04)

### ✨ Features | 新功能

- 新增闲置状态下message支持异步函数动态提供提示的选项, 现在你可以给idleTips.message传入一个异步函数, 并返回一个string类型 ([e37abbb](https://github.com/oh-my-live2d/oh-my-live2d/commit/e37abbb11ae6698c41af81cb3d0cab01c775f95d)) by loclink
- **menus:** 新增了休息按钮, 现在你可以通过菜单栏手动让模型滑出屏幕外, 这在有内容被模型遮挡时非常有用 ([a34ed03](https://github.com/oh-my-live2d/oh-my-live2d/commit/a34ed03928d8b238636c9e6d79781b3e20539939)) by loclink
- **tips:** 闲置消息的wordTheDay支持传入格式化函数, 现在您可以通过传入格式化函数定制您自己的消息模板 ([7f43e4c](https://github.com/oh-my-live2d/oh-my-live2d/commit/7f43e4c66b801774c248a80c9e20337eea26de89)) by loclink

### 🐛 Bug Fixes | Bug 修复

- 关闭了变装菜单按钮, 由于不是每个模型的纹理都是非组装式可独立展示的, 所以取消了该按钮与交互, 但会在后续版本提供可主动变更纹理的api ([102e9a2](https://github.com/oh-my-live2d/oh-my-live2d/commit/102e9a2b12d4f8f71ceda2c9b2e16f419d8313df)) by loclink

## [0.7.3](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.7.2...v0.7.3) (2024-03-03)

### 🐛 Bug Fixes | Bug 修复

- **vuepress-plugin:** 修复环境变量**OML2D_OPTIONS**未定义的问题 ([56da8b2](https://github.com/oh-my-live2d/oh-my-live2d/commit/56da8b2b45f4a6b42c5625774bb8a6a92a2deef9)) by loclink

## [0.7.2](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.7.1...v0.7.2) (2024-03-03)

### ✨ Features | 新功能

- update ([e754530](https://github.com/oh-my-live2d/oh-my-live2d/commit/e754530135ebde24af23e84e81f0a88aa4a9cd95)) by Mr.Hope

### 🐛 Bug Fixes | Bug 修复

- 修复umd模块按需导入时模块缺失的错误 ([6f80e02](https://github.com/oh-my-live2d/oh-my-live2d/commit/6f80e022a0a062e1c8020ccb01233ba8f323e5cb)) by loclink
- fix vue test ([381bf1b](https://github.com/oh-my-live2d/oh-my-live2d/commit/381bf1b015c54aef98d1b38ece846b392f6563b2)) by Mr.Hope
- type error ([909e50c](https://github.com/oh-my-live2d/oh-my-live2d/commit/909e50c60caac1d68cd019fc425343258cea6ab7)) by loclink
