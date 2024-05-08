# 在 hexo 中使用

::: tip
这是一个第三方插件, 具体使用方式您除了本站之外可能还需要查阅: <https://github.com/kongxiangyiren/hexo-oh-my-live2d>
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
  CDN: https://registry.npmmirror.com/oh-my-live2d/latest/files
  # CDN: https://registry.npmmirror.com/oh-my-live2d/0.13/files/dist/index.min.js
  option:
    # importType: 'cubism2' #  导入类型, 默认使用全量导入: complete , 可选值: complete, cubism2, cubism5
    libraryUrls: # 自定义 Cubism SDK 外部资源地址
      complete: https://registry.npmmirror.com/oh-my-live2d/latest/files/lib/complete.js
      cubism2: https://registry.npmmirror.com/oh-my-live2d/latest/files/lib/cubism2.js
      cubism5: https://registry.npmmirror.com/oh-my-live2d/latest/files/lib/cubism5.js
    # menus:
    # items: |
    #   (defaultItems)=>{
    #    return [
    #      ...defaultItems,
    #      {
    #        id: 'github',
    #        icon: 'github-fill',
    #        title: '我的github',
    #        onClick: ()=>window.open('https://github.com/hacxy')
    #      }
    #    ]
    #   }

    # items:
    #   - id: 'github'
    #     icon: 'github-fill'
    #     title: '我的github'
    #     onClick: ()=>window.open('https://github.com/hacxy')

    mobileDisplay: true # 是否在移动端显示
    models:
      - path: https://registry.npmmirror.com/live2d-widget-model-shizuku/1.0.5/files/assets/shizuku.model.json
        mobilePosition: [-10, 23] # 移动端时模型在舞台中的位置。 默认值: [0,0] [横坐标, 纵坐标]
        mobileScale: 0.1 # 移动端时模型的缩放比例 默认值: 0.1
        mobileStageStyle: # 移动端时舞台的样式
          width: 180
          height: 166
        motionPreloadStrategy: IDLE # 动作预加载策略 默认值: IDLE 可选值: ALL | IDLE | NONE
        position: [-10, 35] # 模型在舞台中的位置。 默认值: [0,0] [横坐标, 纵坐标]
        scale: 0.15 # 模型的缩放比例 默认值: 0.1
        # showHitAreaFrames: false # 是否显示点击区域 默认值: false
        stageStyle:
          width: 250
          height: 250
      - path: 'https://registry.npmmirror.com/live2d-widget-model-koharu/1.0.5/files/assets/koharu.model.json'
        scale: 0.12
        position: [0, 0]
        stageStyle:
          width: 250
        mobileScale: 0.08
        mobilePosition: [0, 0]
        mobileStageStyle: # 移动端时舞台的样式
          width: 180
      - path: 'https://registry.npmmirror.com/live2d-widget-model-haruto/1.0.5/files/assets/haruto.model.json'
        scale: 0.12
        position: [0, 0]
        mobileScale: 0.08
        mobilePosition: [0, 0]
        mobileStageStyle: # 移动端时舞台的样式
          width: 180
        stageStyle:
          width: 250
    parentElement: document.body #为组件提供一个父元素，如果未指定则默认挂载到 body 中
    primaryColor: 'var(--btn-bg)' # 主题色 支持变量
    sayHello: false # 是否在初始化阶段打印项目信息
    tips:
      style:
        width: 230
        height: 120
        left: calc(50% - 20px)
        top: -100px
      mobileStyle:
        width: 180
        height: 80
        left: calc(50% - 30px)
        top: -100px
      idleTips:
        interval: 15000
        # message:
        #   - 你好呀~
        #   - 欢迎来到我的小站~
        # 自定义提示语 需要 引入 axios 库 ,也可以使用其他方法
        message: |
          function(){
            return axios.get('https://v1.hitokoto.cn?c=i')
              .then(function (response) {
                return response.data.hitokoto ;
              })
              .catch(function (error) {
                console.error(error);
              });
          }
        # wordTheDay: true
        # 自定义  https://v1.hitokoto.cn  数据
        # wordTheDay: |
        #   function(wordTheDayData){
        #     return `${wordTheDayData.hitokoto}    by.${wordTheDayData.from}`;
        #   }
  # then: |
  #   (oml2d)=>{
  #      setTimeout(() => {
  #     oml2d.tipsMessage('hello world', 3000, 10);
  #   }, 8000);
  #   }
```

如需自定义配置, 请在[配置选项](../api/interfaces/Options.md) 中查阅详细配置内容.
