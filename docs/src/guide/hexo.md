# 在 hexo 中使用

::: tip
这是一个不受官方支持和维护的第三方插件, 具体使用方式您除了本站之外可能还需要查阅: <https://github.com/kongxiangyiren/hexo-oh-my-live2d>
:::

## 安装

```sh
npm install hexo-oh-my-live2d

```

## 使用

```yml
# _config.yml
OhMyLive2d:
  enable: true
  CDN: https://unpkg.com/oh-my-live2d
  option:
    fixed: true # 组件是否使用固定定位
    models:
      - path: 'https://registry.npmmirror.com/live2d-widget-model-koharu/1.0.5/files/assets/koharu.model.json'
        scale: 0.12
        position: [0, 0]
        # stageStyle:
        #   backgroundColor: 'rgba(0, 0, 0, 0)'
        #   width: 300
        #   height: 400
      - path: 'https://registry.npmmirror.com/live2d-widget-model-haruto/1.0.5/files/assets/haruto.model.json'
        scale: 0.12
        position: [0, 0]
        # stageStyle:
        #   backgroundColor: 'rgba(0, 0, 0, 0)'
        #   width: 300
        #   height: 400
    parentElement: document.body #为组件提供一个父元素，如果未指定则默认挂载到 body 中
    sayHello: false # 是否在初始化阶段打印项目信息
    tips:
      style:
        width: 230
        height: 120
        offsetX: 0
        offsetY: -100
      idleTips:
        # interval: 15000
        message:
          - '你好'
          - '欢迎'
```

如需自定义配置, 请在[配置选项](../options/Options.md) 中查阅详细配置内容.
