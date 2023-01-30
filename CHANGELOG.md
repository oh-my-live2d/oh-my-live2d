# Changelog

## [0.1.0](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.22...v0.1.0) (2023-01-30)


### ✨ Features | 新功能

* 新增点击区域触发动作 ([f670372](https://github.com/oh-my-live2d/oh-my-live2d/commit/f6703720218c33d39b689d654eaa90cf0c3c16e5))


### 🔧 Continuous Integration | CI 配置

* 修改构建配置 ([3e39e11](https://github.com/oh-my-live2d/oh-my-live2d/commit/3e39e1145037437781f7bee423287d4fad16844a))
* 更新lock文件 ([3cdfd7c](https://github.com/oh-my-live2d/oh-my-live2d/commit/3cdfd7cce2f3ae499870b347be3039e1ea636f91))
* 移除lock文件的跟踪 ([b800680](https://github.com/oh-my-live2d/oh-my-live2d/commit/b800680e4e05e637cfb7f5b026e0052df971f9f3))

### [0.0.22](///compare/v0.0.21...v0.0.22) (2023-01-20)


### 🐛 Bug Fixes | Bug 修复

* 修复了屏幕大小变为移动端时，提示框依旧显示的bug 5379a1b

### [0.0.21](///compare/v0.0.20...v0.0.21) (2023-01-20)


### 🐛 Bug Fixes | Bug 修复

* 修复在vuepress中导致icon错位的问题 59ac177

### [0.0.20](///compare/v0.0.19...v0.0.20) (2023-01-17)


### ✅ Tests | 测试

* 测试移动端分辨率 c51815a
* 测试移动端表现 f4e28db
* 测试移动端表现 b5d2b7f


### 🐛 Bug Fixes | Bug 修复

* 修复分辨率低的情况下模型不清晰的问题，现在自动适应分辨率 0fef034
* 修改提示框样式，修改了选项名称由modelSource更改为source 63e3629
* 将选项由浅合并修改为深合并，修复19点至20点的提示信息错误的问题 224039d


### ⚡ Improvements | 优化

* 优化了配置选项的名称和位置，增加了若干个调整提示框样式的选项 d8a2ac3
* 优化提示系统 d4d2a59
* 调整选项必选改为可选 d87c16f


### 📦 Chores | 其他更新

* 修改了文档目录结构 aac5d71


### 👷‍ Build System | 构建

* 依赖cross-env，区分环境 d7aa4f6
* 更改脚本命令 b987ffa

### [0.0.19](///compare/v0.0.18...v0.0.19) (2023-01-12)


### ⚡ Improvements | 优化

* 移除了媒体查询不同宽度下展示不同大小，修改为移动端下隐藏模型 2b7e5ff

### [0.0.18](///compare/v0.0.17...v0.0.18) (2023-01-11)


### ⚡ Improvements | 优化

* 移除size选项，新增width和height选项，调整默认大小为模型边界大小 78312d9

### [0.0.17](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.16...v0.0.17) (2023-01-07)


### 🐛 Bug Fixes | Bug 修复

* 修复了移动端下字体太小的bug ([bde3f14](https://github.com/oh-my-live2d/oh-my-live2d/commit/bde3f14ad6b8dacb053c5a43fb7673be6bef5270))

### [0.0.16](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.15...v0.0.16) (2023-01-05)


### ✨ Features | 新功能

* 加入了屏幕自适应：xl、md、xs 三种大小，修改了配置属性名，可根据屏幕尺寸分别配置。 ([9bcdc5b](https://github.com/oh-my-live2d/oh-my-live2d/commit/9bcdc5bd06f367de01d9e5591db2b72bf9cf9b81))

### [0.0.15](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.14...v0.0.15) (2023-01-05)


### ♻ Code Refactoring | 代码重构

* 初始化操作不再区分手动或自动 ([b7635f7](https://github.com/oh-my-live2d/oh-my-live2d/commit/b7635f7b923ef48c393bc00cbba6f734e581d6a7))

### [0.0.14](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.13...v0.0.14) (2023-01-05)


### 📦 Chores | 其他更新

* 修改包解析策略为Node，加入模块类型 ([68fb1fe](https://github.com/oh-my-live2d/oh-my-live2d/commit/68fb1fe36bd3bcc2076de9abaa5d7114cdfe0e24))

### [0.0.13](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.12...v0.0.13) (2023-01-05)


### 📦 Chores | 其他更新

* 修改package.json的type为module ([ead7991](https://github.com/oh-my-live2d/oh-my-live2d/commit/ead7991137b91d5e8cb7095e6e70e57c2788e18b))
* 新增package.json的keywords ([399daff](https://github.com/oh-my-live2d/oh-my-live2d/commit/399daffac5c7d2afac3838ce8fb6ae16ce2c9fbe))
* 更新项目依赖 ([81df6fe](https://github.com/oh-my-live2d/oh-my-live2d/commit/81df6fea5bb3e567df34eabcc3e21f152d8087ed))

### [0.0.12](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.11...v0.0.12) (2023-01-04)


### ✨ Features | 新功能

* 新增复制事件被调用时触发copy类型消息提示，优化了消息提示方法 ([13ca5fe](https://github.com/oh-my-live2d/oh-my-live2d/commit/13ca5fe5fd2fa4b64603407ee10f2b83edf8bb03))

### [0.0.11](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.10...v0.0.11) (2023-01-04)


### ✨ Features | 新功能

* 新增提示框显示优先级 ([df20235](https://github.com/oh-my-live2d/oh-my-live2d/commit/df202356007ecbaaf8cdcf7c02a5df6a86143f34))
* 闲置状态的消息提示配置，可通过loadLive2DModel方法传入的配置修改 ([421eab1](https://github.com/oh-my-live2d/oh-my-live2d/commit/421eab11426d4b17a97bf01d47684548975c598d))

### [0.0.10](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.9...v0.0.10) (2023-01-03)


### ♻ Code Refactoring | 代码重构

* 模块导出方法名由loadModel正式更改为loadLive2DModel  ([12caa0c](https://github.com/oh-my-live2d/oh-my-live2d/commit/12caa0ce3923c58752cdd8cd57c0f89305ea910d))


### 📝 Documentation | 文档

* 更新自述文件 ([dd80853](https://github.com/oh-my-live2d/oh-my-live2d/commit/dd808531cf380248752a3e9f8094c9567a2d15fc))

### [0.0.9](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.8...v0.0.9) (2023-01-03)


### ✨ Features | 新功能

* 设置动作预加载策略为全部动作 ([330c43e](https://github.com/oh-my-live2d/oh-my-live2d/commit/330c43e64f9ab87d7b45e8bda241a9daa14e28c2))

### [0.0.8](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.7...v0.0.8) (2023-01-03)


### 📦 Chores | 其他更新

* 修改刷新cdn缓存脚本逻辑，由刷新1个文件改为刷新3个 ([c6696b5](https://github.com/oh-my-live2d/oh-my-live2d/commit/c6696b5a414ed3fbaa8db0e1cef56a4742403932))


### 📝 Documentation | 文档

* 修改自述文件按需导入的错误描述 ([c228f72](https://github.com/oh-my-live2d/oh-my-live2d/commit/c228f7210f3a1c12258a433a60d0bd0284294398))
* 更新自述文档 ([1a1a123](https://github.com/oh-my-live2d/oh-my-live2d/commit/1a1a123c0e6d2fe5327a466ad63f80e5007fb68c))


### ✨ Features | 新功能

* 新增小提示弹框，加入了循环自动提示功能，加入了出场欢迎提示功能 ([b59d428](https://github.com/oh-my-live2d/oh-my-live2d/commit/b59d428f4c285566838495a17afd5626f519b950))


### ⚡ Performance Improvements | 性能优化

* 去除额外的非必要依赖，大量减少了包体积 ([d03a85a](https://github.com/oh-my-live2d/oh-my-live2d/commit/d03a85a0a9d88a7683f2856580769273ec6a0f52))

### [0.0.7](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.6...v0.0.7) (2023-01-01)


### ⚡ Performance Improvements | 性能优化

* 修改悬浮按钮隐藏时的移动距离，避免阴影部分露出 ([fface7d](https://github.com/oh-my-live2d/oh-my-live2d/commit/fface7d81289b7909bd9961f2f3677e38a531e97))

### [0.0.6](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.5...v0.0.6) (2023-01-01)


### 📦 Chores | 其他更新

* 新增刷新cdn脚本工具，更新项目自述文件 ([4c231bb](https://github.com/oh-my-live2d/oh-my-live2d/commit/4c231bb38414ece4ba69f3335b50bc6298bdd12a))


### 📝 Documentation | 文档

* 更新自述文件 ([7366cc3](https://github.com/oh-my-live2d/oh-my-live2d/commit/7366cc3a2f3a6851f7b75be49329e5d417d98497))
* 编写并完善自述文件 ([db45884](https://github.com/oh-my-live2d/oh-my-live2d/commit/db45884f8d1166a6f997546a329564a34eb186b4))


### ✨ Features | 新功能

* 新增iconfont资源依赖，新增悬浮加载按钮 ([3581b9c](https://github.com/oh-my-live2d/oh-my-live2d/commit/3581b9c9c9dbbd0443e9e67fbbf198a2a2dec2ce))

### [0.0.5](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.4...v0.0.5) (2022-12-31)


### ⚡ Performance Improvements | 性能优化

* 优化了刷新时闪现空白的问题 ([34a634f](https://github.com/oh-my-live2d/oh-my-live2d/commit/34a634fad7e5d56938353befb637003c798aef2f))

### [0.0.4](https://github.com/oh-my-live2d/oh-my-live2d/compare/v0.0.3...v0.0.4) (2022-12-30)


### 🐛 Bug Fixes | Bug 修复

* 修复webpack5中导入模块后与polyfill的相关报错，修复刷新时元素会滞留空白的问题 ([4cee00e](https://github.com/oh-my-live2d/oh-my-live2d/commit/4cee00e59870dd8ab146313d46b25e2b857e4152))


### 📝 Documentation | 文档

* 更新README.md ([5c9a34a](https://github.com/oh-my-live2d/oh-my-live2d/commit/5c9a34a51cf43f1addb1c2e095287638bd34fbd9))


### 👷‍ Build System | 构建

* 修改依赖库名称，删除多余文件 ([5311612](https://github.com/oh-my-live2d/oh-my-live2d/commit/5311612c1bbd5de62c3e71bd57b50b4c448d4dc9))