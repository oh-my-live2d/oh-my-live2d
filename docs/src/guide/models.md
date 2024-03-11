# 模型资源

OhMyLive2D 贴心的为您准备了一些稳定且可以高速访问的高质量模型资源, 并为您附上了对应模型的配置

您可以前往<https://github.com/oh-my-live2d/live2d-models>下载这些模型

## 模型配置列表

以下配置可以直接应用于模型选项, 例如:

```ts
import { loadOml2d } from 'oh-my-live2d';
loadOml2d({
  models: [
    {
      path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json'
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
  "path": "https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json"
}
```

---

### Pio

- 效果图:

![](https://loclink-1259720482.cos.ap-beijing.myqcloud.com/image/%E5%BD%95%E5%B1%8F2024-03-12%2000.17.00.gif)

- 配置:

```json
{
  "path": "https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json",
  "scale": 0.4,
  "position": [0, 50],
  "stageStyle": {
    "height": 300
  }
}
```

---

## 免责声明:

该仓库所有模型均来源于网络, 仅供参考和学习, 严禁用于任何商业盈利项目, 模型的所有权均属于这个模型的作者或创作团队, 若侵权请联系: hacxy.97@outlook.com 及时删除
