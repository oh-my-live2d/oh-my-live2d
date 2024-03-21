# 模型资源

OhMyLive2D 贴心的为您准备了一些高质量模型资源, 并为您附上了对应模型的配置, 以下这些模型静态资源地址大部分来自作者本人的服务器.

您可以前往<https://github.com/oh-my-live2d/live2d-models>下载这些模型

## 模型配置列表

以下配置可以直接应用于模型选项, 例如:

```ts
import { loadOml2d } from 'oh-my-live2d';
loadOml2d({
  models: [
    {
      path: 'https://model.oml2d.com/Senko_Normals/senko.model3.json',
      position: [-10, 20]
    }
  ]
});
```

### Senko_Normals

- 效果图:
  ![](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/%E5%BD%95%E5%B1%8F2024-03-11%2023.51.51.gif)

- 配置:

  ```json
  {
    "path": "https://model.oml2d.com/Senko_Normals/senko.model3.json",
    "position": [-10, 20]
  }
  ```

---

### Pio

- 效果图:

![](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/%E5%BD%95%E5%B1%8F2024-03-12%2000.17.00.gif)

- 配置:

  ```json
  {
    "path": "https://model.oml2d.com/Pio/model.json",
    "scale": 0.4,
    "position": [0, 50],
    "stageStyle": {
      "height": 300
    }
  }
  ```

---

### shizuku

- 效果图:

![](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/%E5%BD%95%E5%B1%8F2024-03-21%2023.04.33.gif)

- 配置:

  ```json
  {
    "path": "https://model.oml2d.com/shizuku/shizuku.model.json",
    "scale": 0.2,
    "volume": 0,
    "position": [70, 70],
    "stageStyle": {
      "height": 370,
      "width": 400
    }
  }
  ```

### shizuku_pajama

- 效果图:  
  ![](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/%E5%BD%95%E5%B1%8F2024-03-21%2023.10.55.gif)
- 配置:

  ```json
  {
    "path": "https://model.oml2d.com/shizuku_pajama/index.json",
    "scale": 0.2,
    "volume": 0,
    "position": [40, 10],
    "stageStyle": {
      "height": 350,
      "width": 330
    }
  }
  ```

---

### HK416-1-normal

- 效果图:
  ![](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/%E5%BD%95%E5%B1%8F2024-03-21%2023.18.31.gif)

- 配置:
  ```json
  {
    "path": "https://model.oml2d.com/HK416-1-normal/model.json",
    "position": [0, 60],
    "scale": 0.08,
    "stageStyle": {
      "height": 450
    }
  }
  ```

---

### cat-black

- 效果图:
  ![](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/%E5%BD%95%E5%B1%8F2024-03-21%2023.29.51.gif)
- 配置:
  ```json
  {
    "path": "https://model.oml2d.com/cat-black/model.json",
    "scale": 0.15,
    "position": [0, 20],
    "stageStyle": {
      "height": 350
    }
  }
  ```

## 资源征集

征集更多有效的模型资源和配置, 您如果有更好的模型资源可以随时对这篇文章进行补充和pr.

## 免责声明

本仓库所有模型文件均来源于网络, 仅供参考和学习, 严禁用于任何商业盈利项目, 所有以盈利为目的而使用本仓库的模型资源的行为均与仓库创建者无关, 仓库中每个模型的所有权均属于这个模型的作者或创作团队, 若侵权请联系: hacxy.97@outlook.com 及时删除
