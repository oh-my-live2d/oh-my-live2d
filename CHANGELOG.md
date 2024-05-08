# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.19.1](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.19.0...v0.19.1) (2024-05-08)

### 🐛 Bug Fixes | Bug 修复

- 修复pixi报错 ([8bce38f](https://github.com/oh-my-live2d/oh-my-live2d/commit/8bce38f27ff691a23178c4937ad546c3730c3a01)) by.@Hacxy

## [0.19.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.18.0...v0.19.0) (2024-05-08)

### ✨ Features | 新功能

- 缓存记录组件的状态sleep、active ([6cfbc24](https://github.com/oh-my-live2d/oh-my-live2d/commit/6cfbc241df8cb6e4615638a7fe27662f89c6d423)) by.@Hacxy
- 添加通过模型名称加载模型的方法 ([7d744d5](https://github.com/oh-my-live2d/oh-my-live2d/commit/7d744d595e0ecc011a9794700fe357e755d8f25d)) by.@kis

### 🐛 Bug Fixes | Bug 修复

- 调整loadModel方法调用入参格式 ([3d950fa](https://github.com/oh-my-live2d/oh-my-live2d/commit/3d950faad76b1ae2a00ee2c311e37b01cf022d90)) by.@Hacxy
- 调整sdk引入,不再使用外部导入sdk的方式,而是内置sdk. 不再区分导入类型, 默认全量导入 ([8865c2e](https://github.com/oh-my-live2d/oh-my-live2d/commit/8865c2e817b98acccba1bb562bd12986ed3f103a)) by.@Hacxy
- 修复动作声音播放异常的bug ([cd0761f](https://github.com/oh-my-live2d/oh-my-live2d/commit/cd0761f141ba740c86bde6404427dd826f3a5c56)) by.@Hacxy
- 修复了初始状态为sleep时，模型加载完成后状态条无法正常显示的bug [#50](https://github.com/oh-my-live2d/oh-my-live2d/issues/50) ([c8814d4](https://github.com/oh-my-live2d/oh-my-live2d/commit/c8814d4d0edb50ad20a77e1b4d22417d51a4c521)) by.@Hacxy
- **statusBar:** 修复了初始状态为sleep时, 模型加载完后状态条不正常显示的bug ([434c3fa](https://github.com/oh-my-live2d/oh-my-live2d/commit/434c3fa5db17c3db48cbc768d5539f379b54b494)) by.@Hacxy

## [0.18.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.17.0...v0.18.0) (2024-05-04)

### ✨ Features | 新功能

- 添加随机加载模型方法 ([78add63](https://github.com/oh-my-live2d/oh-my-live2d/commit/78add632af17741c1adaed19f58c7486c30e0c3f)) by.@kis
- 添加修改当前模型服装功能 ([e85f9d5](https://github.com/oh-my-live2d/oh-my-live2d/commit/e85f9d5f2a274d6665c19c87c6531782ca90d24c)) by.@kis
- 新增默认休息选项 initialStatus ([01ea20c](https://github.com/oh-my-live2d/oh-my-live2d/commit/01ea20c0508098c8b082f6ab0eb65624d1de93b9)) by.@kis
- 新增全局 stageStyle 属性 ([78af787](https://github.com/oh-my-live2d/oh-my-live2d/commit/78af7875f7ac1d12ddddfa8371fa94e7e669f831)) by.@kis

### 🐛 Bug Fixes | Bug 修复

- 调整切换衣服菜单的图标 ([c4acebb](https://github.com/oh-my-live2d/oh-my-live2d/commit/c4acebb120260aba2b292772add2991599dfba9f)) by.@Hacxy
- 没有配置多个衣服时切换衣服显示提示信息 ([72ff458](https://github.com/oh-my-live2d/oh-my-live2d/commit/72ff458ce103eaca433a013acb975f54d125178e)) by.@Hacxy

## [0.17.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.16.1...v0.17.0) (2024-04-29)

### ✨ Features | 新功能

- 新增loadSpecificModel方法，可以通过modelIndex加载指定模型 ([01aa28e](https://github.com/oh-my-live2d/oh-my-live2d/commit/01aa28e02b4c19352c8398bcf249ef68d45447c3)) by.@kis

## [0.16.1](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.16.0...v0.16.1) (2024-04-10)

### 🐛 Bug Fixes | Bug 修复

- 调整每日一言接口地址 ([4a9812f](https://github.com/oh-my-live2d/oh-my-live2d/commit/4a9812f0bcecf7ec077be006d4dd1046ea999ea0)) by Hacxy

## [0.16.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.15.2...v0.16.0) (2024-04-10)

### ✨ Features | 新功能

- 新增了一些set方法 ([2864999](https://github.com/oh-my-live2d/oh-my-live2d/commit/2864999c38f87234ab11b23fccf192e98f95d5a3)) by Hacxy
- **model:** 新增模型选项: rotation, anchor , 以及其set方法 ([763726d](https://github.com/oh-my-live2d/oh-my-live2d/commit/763726dd7f7e4072ad9f1165a507385e16d9b454)) by Hacxy

### 🐛 Bug Fixes | Bug 修复

- 部署一言服务, 将原接口地址更换为稳定的一言接口地址 ([a6bfbe5](https://github.com/oh-my-live2d/oh-my-live2d/commit/a6bfbe58cb425f1b5c851ada3045f9f3646ffd8b)) by Hacxy
- 优化版本比对逻辑 ([005d368](https://github.com/oh-my-live2d/oh-my-live2d/commit/005d368f5dde116d0334d386c7502c0e0bfc5517)) by Hacxy

## [0.15.2](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.15.1...v0.15.2) (2024-03-26)

### 🐛 Bug Fixes | Bug 修复

- 修复版本比对因缓存问题比对错误的bug ([dc0393b](https://github.com/oh-my-live2d/oh-my-live2d/commit/dc0393be60163c1ab909429fd9066cf8e1575f17)) by Hacxy

## [0.15.1](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.15.0...v0.15.1) (2024-03-26)

### 🐛 Bug Fixes | Bug 修复

- 修复了cdn导入时在head中加载js文件无法挂载组件的bug ([f03a5ed](https://github.com/oh-my-live2d/oh-my-live2d/commit/f03a5ed1f2f93f1be90b09f4a7f48e71aceea8d9)) by Hacxy

## [0.15.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.14.1...v0.15.0) (2024-03-25)

### ✨ Features | 新功能

- 新增停靠位置选项: dockedPosition, 定义组件靠左或者靠右 ([66538c3](https://github.com/oh-my-live2d/oh-my-live2d/commit/66538c38560e3d7c29cfa669e6dccfad6a4b6616)) by Hacxy

### 🐛 Bug Fixes | Bug 修复

- **stage:** 模型选项舞台样式隔离 ([a5a51ac](https://github.com/oh-my-live2d/oh-my-live2d/commit/a5a51ac850758e3938e1ad88fc7d69a1d2a60bfb)) by Hacxy

## [0.14.1](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.14.0...v0.14.1) (2024-03-25)

### 🐛 Bug Fixes | Bug 修复

- 修复脚本加载方法判断错误 ([666a20a](https://github.com/oh-my-live2d/oh-my-live2d/commit/666a20a01433efda3cb32caccc57744faeff0efb)) by Hacxy
- **vuepress-plugin:** 修复了vuepress-plugin在使用时无类型推导的bug ([487ef01](https://github.com/oh-my-live2d/oh-my-live2d/commit/487ef01bf9bc8f4aa16b37916f39d32fc0d67007)) by Hacxy

## [0.14.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.13.0...v0.14.0) (2024-03-24)

### ✨ Features | 新功能

- **events:** 新增舞台滑入滑出事件监听 ([863a179](https://github.com/oh-my-live2d/oh-my-live2d/commit/863a1792061a2786edfd65b9f7345d08e58e52c4)) by Hacxy
- **menus:** 菜单选项新增disable属性, 当值为true时将不会创建菜单 ([527cd91](https://github.com/oh-my-live2d/oh-my-live2d/commit/527cd91aa7c422d88b25e36cbdf016f8211a4218)) by Hacxy
- **menus:** 修改菜单和提示框创建顺序, 将菜单选项变更为函数动态参数 ([bf8f9ab](https://github.com/oh-my-live2d/oh-my-live2d/commit/bf8f9abf76fa32ea2b7f45e8824e9f3410260acd)) by Hacxy
- **models:** 新增模型选项:name ([a829413](https://github.com/oh-my-live2d/oh-my-live2d/commit/a829413c72e392ede5cfa134e9c97aca4d628364)) by Hacxy
- **status-bar:** 添加状态条配置选项 ([473f7f9](https://github.com/oh-my-live2d/oh-my-live2d/commit/473f7f9bfc0c3e10d09146f34cc54d48a8bf535d)) by Hacxy
- **status-bar:** 状态条选项新增了disable属性, 当为true时不会创建状态条 ([67b1309](https://github.com/oh-my-live2d/oh-my-live2d/commit/67b13097ae6de98bd3ffe52f52304f0b6d829342)) by Hacxy
- **tips:** 提示框选项提供函数调用式 ([fd356c7](https://github.com/oh-my-live2d/oh-my-live2d/commit/fd356c7599eeb361e6c1088105f17711647c534c)) by Hacxy

### 🐛 Bug Fixes | Bug 修复

- 调整模型事件注册时机 ([17f63cd](https://github.com/oh-my-live2d/oh-my-live2d/commit/17f63cdb90cdcadc905e61b3b19442b95d87b55a)) by Hacxy
- 无模型配置时不执行初始化操作 ([e394e7d](https://github.com/oh-my-live2d/oh-my-live2d/commit/e394e7d50980ee685d069736663c6e0ef676c310)) by Hacxy
- 修改了loadOml2d方法的调用形态, 由异步函数调用修改为普通函数调用, 加入了onLoad事件监听, 现在可以监听模型的加载状态 ([611e714](https://github.com/oh-my-live2d/oh-my-live2d/commit/611e714293f8f09629103263f45d54b48574ece9)) by Hacxy
- 优化状态条模块, 取消了loadOml2d方法的调用次数限制 ([8f0a978](https://github.com/oh-my-live2d/oh-my-live2d/commit/8f0a9789328b50c628709c25edc506a24b9317ea)) by Hacxy
- **menus:** 菜单选项函数调用时新增参数:currentModel ([5237b78](https://github.com/oh-my-live2d/oh-my-live2d/commit/5237b781c32f41ee6d8680afbc3e6f370d178831)) by Hacxy
- **status-bar:** 状态条选项新增:switchingMessage ([ea72918](https://github.com/oh-my-live2d/oh-my-live2d/commit/ea7291881f906fb3974d56947e7d14e88b21e7af)) by Hacxy

## [0.13.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.12.0...v0.13.0) (2024-03-21)

### ✨ Features | 新功能

- 菜单项可配, 现在您可以自由配置菜单项的图标和事件. loadOml2d暴露主动提示消息方法tipsMessage ([1f4d74a](https://github.com/oh-my-live2d/oh-my-live2d/commit/1f4d74a2e057de81d5e4c11a958b61d87f30adeb)) by Hacxy
- menus.items支持传入false关闭菜单项 ([8a75cf7](https://github.com/oh-my-live2d/oh-my-live2d/commit/8a75cf7cee9e272ee9abd275d0f1f92214493979)) by Hacxy
- **status-bar:** 新增移动端下状态条样式配置选项 ([e9828b8](https://github.com/oh-my-live2d/oh-my-live2d/commit/e9828b8ab0aab9a939c03f0f5dd06e5d776d2172)) by Hacxy

### 🐛 Bug Fixes | Bug 修复

- 记录了当前模型的索引值, 修复了切换模型后刷新还是从第一个模型开始展示 ([34d83fc](https://github.com/oh-my-live2d/oh-my-live2d/commit/34d83fcf6620f6d37a4534a816aea196be7d52a0)) by Hacxy

## [0.12.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.11.1...v0.12.0) (2024-03-16)

### ✨ Features | 新功能

- **menus:** 新增了移动端下菜单样式的配置选项 ([995a74a](https://github.com/oh-my-live2d/oh-my-live2d/commit/995a74abb46f3762068fe099cdb402548ad136e6)) by Hacxy

## [0.11.1](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.11.0...v0.11.1) (2024-03-15)

### 🐛 Bug Fixes | Bug 修复

- vuepress-plugin发布修复补丁 ([180dbcb](https://github.com/oh-my-live2d/oh-my-live2d/commit/180dbcb9847c41b6dc9821ed5cc8fb4bd6584e06)) by Hacxy

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
