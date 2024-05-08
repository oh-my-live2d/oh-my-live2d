//@ts-nocheck

// #region options
import { loadOml2d } from 'oh-my-live2d';
loadOml2d({
  // 在这里进行配置
});
// #endregion options

// -----------

// #region ModelOptions
import { loadOml2d } from 'oh-my-live2d';
loadOml2d({
  models: [
    // 在这里进行配置
    {
      path: 'https://model.oml2d.com/Senko_Normals/senko.model3.json',
      position: [-10, 20]
    }
  ]
});
// #endregion ModelOptions

// --------------

// #region MenuOptionsBasic
import { loadOml2d } from 'oh-my-live2d';
loadOml2d({
  menus: {
    // 在这里配置
  }
});
// #endregion MenuOptionsBasic

//--------

// #region MenuOptionsAdvanced-1
import { loadOml2d } from 'oh-my-live2d';
loadOml2d({
  menus: (_, currentIndex) => {
    if (currentIndex === 0) {
      return {
        style: {
          left: 0
        }
      };
    } else {
      return {
        items: (defaultItem) => {
          return [defaultItem[1]];
        }
      };
    }
  }
});
// #endregion MenuOptionsAdvanced-1

// ---------------

// #region MenuOptionsAdvanced-2
import { loadOml2d } from 'oh-my-live2d';
loadOml2d({
  models: [
    {
      name: 'shizuku',
      path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/shizuku/shizuku.model.json'
    },
    {
      name: 'senko',
      path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json'
    },
    {
      name: 'pio',
      path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json'
    }
  ],
  menus: (currentModel) => {
    switch (currentModel.name) {
      case 'shizuku':
        return {
          style: {
            left: 0
          }
        };
      default:
        return {
          items: (defaultItem) => {
            return [defaultItem[1]];
          }
        };
    }
  }
});
// #endregion MenuOptionsAdvanced-2

// -----------

// #region TipsOptionsBasic
import { loadOml2d } from 'oh-my-live2d';
loadOml2d({
  tips: {
    // 在这里配置
  }
});
// #endregion TipsOptionsBasic

// ----------

// #region TipsOptionsAdvanced-1
import { loadOml2d } from 'oh-my-live2d';
loadOml2d({
  tips: (_, currentIndex) => {
    if (currentIndex === 0) {
      return {
        copyTips: {
          message: ['复制了啥?']
        },
        idleTips: {
          wordTheDay: true
        }
      };
    } else {
      return {
        idleTips: {
          wordTheDay: false
        }
      };
    }
  }
});
// #endregion TipsOptionsAdvanced-1

// ----------

// #region TipsOptionsAdvanced-2
import { loadOml2d } from 'oh-my-live2d';
const oml2d = loadOml2d({
  models: [
    {
      name: 'shizuku',
      path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/shizuku/shizuku.model.json'
    },
    {
      name: 'senko',
      path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json'
    },
    {
      name: 'pio',
      path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json'
    }
  ],
  menus: (currentModel) => {
    switch (currentModel.name) {
      case 'shizuku':
        return {
          copyTips: {
            message: [`${currentModel.name}: 复制了啥?`]
          },
          idleTips: {
            wordTheDay: true
          }
        };
      default:
        return {
          idleTips: {
            wordTheDay: false
          }
        };
    }
  }
});
// #endregion TipsOptionsAdvanced-2

// ----------

// #region StatusBarOptions
import { loadOml2d } from 'oh-my-live2d';
loadOml2d({
  statusBar: {
    // 在这里进行配置
  }
});
// #endregion StatusBarOptions
