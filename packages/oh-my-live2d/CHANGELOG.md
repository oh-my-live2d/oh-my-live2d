# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.9.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.8.2...v0.9.0) (2024-03-09)

### ✨ Features | 新功能

- 新增点击触发模型动作, 现在点击模型将会播放对应动作和声音 ([40033fa](https://github.com/oh-my-live2d/oh-my-live2d/commit/40033fae668670e5c79732e267db3433fbe7d61a)) by Hacxy
- **model:** 模型选项加入动作预加载策略 ([7493d9b](https://github.com/oh-my-live2d/oh-my-live2d/commit/7493d9bd786857c8b51e07aff95db22c40fd762c)) by Hacxy
- **model:** 现在您可以通过showHitAreaFrames选项来查看模型的所有可被点击区域, 所有可点击区域被点击时将触发hit事件并尽可能的播放相应动作和声音 ([2d0b647](https://github.com/oh-my-live2d/oh-my-live2d/commit/2d0b647fce318ef50e4a0e9b065217c7d31da055)) by Hacxy

### 🐛 Bug Fixes | Bug 修复

- 调整移动端状态条的提示文案 ([2e35bfc](https://github.com/oh-my-live2d/oh-my-live2d/commit/2e35bfc17e9178e335bbb2a4e73c85710e12952d)) by Hacxy

## [0.8.2](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.8.1...v0.8.2) (2024-03-06)

### 🐛 Bug Fixes | Bug 修复

- 修复休息时还会提示闲置消息的bug ([fbee2a9](https://github.com/oh-my-live2d/oh-my-live2d/commit/fbee2a9190db20a39a5836223b34db96a0eb4aeb)) by hacxy

## [0.8.1](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.8.0...v0.8.1) (2024-03-05)

### 🐛 Bug Fixes | Bug 修复

- 修复了关于按钮点击事件无响应的bug ([5f9c00f](https://github.com/oh-my-live2d/oh-my-live2d/commit/5f9c00f85d76c38fd9e3afd723c066e037004fa5)) by loclink

## [0.8.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.7.3...v0.8.0) (2024-03-04)

### ✨ Features | 新功能

- 新增闲置状态下message支持异步函数动态提供提示的选项, 现在你可以给idleTips.message传入一个异步函数, 并返回一个string类型 ([e37abbb](https://github.com/oh-my-live2d/oh-my-live2d/commit/e37abbb11ae6698c41af81cb3d0cab01c775f95d)) by loclink
- **menus:** 新增了休息按钮, 现在你可以通过菜单栏手动让模型滑出屏幕外, 这在有内容被模型遮挡时非常有用 ([a34ed03](https://github.com/oh-my-live2d/oh-my-live2d/commit/a34ed03928d8b238636c9e6d79781b3e20539939)) by loclink
- **tips:** 闲置消息的wordTheDay支持传入格式化函数, 现在您可以通过传入格式化函数定制您自己的消息模板 ([7f43e4c](https://github.com/oh-my-live2d/oh-my-live2d/commit/7f43e4c66b801774c248a80c9e20337eea26de89)) by loclink

### 🐛 Bug Fixes | Bug 修复

- 关闭了变装菜单按钮, 由于不是每个模型的纹理都是非组装式可独立展示的, 所以取消了该按钮与交互, 但会在后续版本提供可主动变更纹理的api ([102e9a2](https://github.com/oh-my-live2d/oh-my-live2d/commit/102e9a2b12d4f8f71ceda2c9b2e16f419d8313df)) by loclink

## [0.7.2](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.7.1...v0.7.2) (2024-03-03)

### ✨ Features | 新功能

- update ([e754530](https://github.com/oh-my-live2d/oh-my-live2d/commit/e754530135ebde24af23e84e81f0a88aa4a9cd95)) by Mr.Hope

### 🐛 Bug Fixes | Bug 修复

- 修复umd模块按需导入时模块缺失的错误 ([6f80e02](https://github.com/oh-my-live2d/oh-my-live2d/commit/6f80e022a0a062e1c8020ccb01233ba8f323e5cb)) by loclink
- type error ([909e50c](https://github.com/oh-my-live2d/oh-my-live2d/commit/909e50c60caac1d68cd019fc425343258cea6ab7)) by loclink
