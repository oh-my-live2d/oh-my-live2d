# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.11.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.10.0...v0.11.0) (2024-03-15)

### ✨ Features | 新功能

- 新增菜单选项menus ([a8170b3](https://github.com/oh-my-live2d/oh-my-live2d/commit/a8170b3b3be8df15d63afc3d32e8896f35d54b0e)) by Hacxy
- 新增模型声音音量调节选项volume ([19a9653](https://github.com/oh-my-live2d/oh-my-live2d/commit/19a9653f98b73b94955d89681096422d491c9a94)) by Hacxy
- 新增oml2d vite插件 ([d667d1f](https://github.com/oh-my-live2d/oh-my-live2d/commit/d667d1f69277798b9e10095870f25c4e57c52745)) by Hacxy
- 新增statusBar状态条选项 ([3c8eb97](https://github.com/oh-my-live2d/oh-my-live2d/commit/3c8eb97a4339622658037b381e05956d5725accd)) by Hacxy

### 🐛 Bug Fixes | Bug 修复

- 修复了移动端菜单不展示的问题 ([8b64378](https://github.com/oh-my-live2d/oh-my-live2d/commit/8b6437849be2fec3b50c60a7986c082402f6d0a5)) by Hacxy

## [0.10.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.9.0...v0.10.0) (2024-03-12)

### ✨ Features | 新功能

- 新增了主题色配置 primaryColor, 现在您可以修改组件中各元素的主色调 ([532b118](https://github.com/oh-my-live2d/oh-my-live2d/commit/532b118f5a4828b7cd3b28d22e5fefe3f7c12381)) by Hacxy
- 新增mobileDisplay选项, 以及移动端样式兼容选项, 现在您可以单独为移动端配置样式 ([3850838](https://github.com/oh-my-live2d/oh-my-live2d/commit/385083813fabdb2e50b3a6d955c4ab142ea3e431)) by Hacxy

### 🐛 Bug Fixes | Bug 修复

- 调整提示框默认样式的最小高度为100px ([fe2b19b](https://github.com/oh-my-live2d/oh-my-live2d/commit/fe2b19b622df945cc413eb1eaa35557630ea73b9)) by Hacxy
- 调整舞台样式选项由简单配置选项修改为可通过完整的CSS对象配置 ([f05eca7](https://github.com/oh-my-live2d/oh-my-live2d/commit/f05eca712a0fc7b26610af70c862517d9efddf2c)) by Hacxy
- 修复wordTheDayData类型缺失, 调整提示框样式参数, 从之前只能简单配置修改为可配置完整的CSS对象 ([8db8397](https://github.com/oh-my-live2d/oh-my-live2d/commit/8db8397621c543ff7fd385f901ccc6f6b359a423)) by Hacxy
- 修改默认主题色为:[#58b0fc](https://github.com/oh-my-live2d/oh-my-live2d/issues/58b0fc) ([0ad6507](https://github.com/oh-my-live2d/oh-my-live2d/commit/0ad6507d00597fdf39622b7da6900567de972741)), closes [#58b0](https://github.com/oh-my-live2d/oh-my-live2d/issues/58b0) by Hacxy
- fixed选项标记为已弃用 ([126f2d2](https://github.com/oh-my-live2d/oh-my-live2d/commit/126f2d2c9478bfaed91e8d2f8dd09166455370e4)) by Hacxy
- **status-bar:** 修复了状态条加载时和加载完成时显示异常 ([ca1fd28](https://github.com/oh-my-live2d/oh-my-live2d/commit/ca1fd2868b3bcd4f2748b90fbf5941213b385169)) by Hacxy
- **tips:** 新增消息行数限制选项messageLine, 超出则在末尾追加省略号 ([46ef487](https://github.com/oh-my-live2d/oh-my-live2d/commit/46ef48713bddb92814d48c310c7bdfbe1e860a58)) by Hacxy

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
