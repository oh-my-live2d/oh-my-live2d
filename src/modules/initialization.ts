import { Application } from 'pixi.js';
import { appendWrapperEl, createWrapperElContent } from './element';
import { appendGlobalStyle, displayLive2d, setGlobalStyle } from './style';
import { sayHello } from '@/utils';
import { _OML2D } from '@/config';
import { ImportType } from '@/types/index';
import type { Live2DModel } from 'pixi-live2d-display';
import '@/assets/icon/iconfont';

// 初始化
const initialization = (L2DModel, importType: ImportType) => {
  // 在此创建宏任务，使主线程的defineConfig方法先执行，再执行此函数体内容
  setTimeout(async () => {
    // 保存引入类型
    _OML2D.importType = importType;

    // 打印项目信息
    sayHello();

    // 创建前回调
    // _OML2D.config.lifecycle?.beforeCreate && _OML2D.config.lifecycle?.beforeCreate();

    // 加入包装器
    _OML2D.wrapperEl.element = appendWrapperEl(_OML2D.wrapperEl.id);

    // 设置包装器内容
    const { canvasEl } = createWrapperElContent(_OML2D.canvasEl.id);

    _OML2D.canvasEl.element = canvasEl;

    // 加入全局样式表
    appendGlobalStyle();

    // 设置全局样式
    setGlobalStyle();

    // 创建
    _OML2D.application = createApplication();
    _OML2D.live2dModel = await createLive2dModel(L2DModel);
  });
};

// 创建应用
const createApplication = () => {
  const app = new Application({
    view: _OML2D.canvasEl.element,
    autoStart: true,
    backgroundAlpha: 0,
    resizeTo: _OML2D.wrapperEl.element
  });
  return app;
};

// 创建模型
const createLive2dModel = async (L2DModel) => {
  const model: Live2DModel = await L2DModel.from(_OML2D.config.modelSource);

  // 创建后回调
  // hooks.createdHook && hooks.createdHook();

  model.x = _OML2D.config.x!;
  model.y = _OML2D.config.y!;
  if (Array.isArray(_OML2D.config.scale)) {
    model.scale.set(_OML2D.config.scale[0], _OML2D.config.scale[1]);
  } else {
    model.scale.set(_OML2D.config.scale);
  }

  // 挂载前回调
  // hooks.beforeMountHook && hooks.beforeMountHook();
  _OML2D.application?.stage.addChild(model);
  _OML2D.live2dModel = model;

  // 加载完毕后显示模型
  await displayLive2d();

  // 挂载后回调
  // hooks.mountedHook && hooks.mountedHook();
  return model;
};

const setup = (L2DModel, importType: ImportType) => {
  switch (importType) {
    case 'complete':
      _OML2D.config.modelSource = 'https://oml-api.tj520.top/Pio/animal-02/index.json';
      break;
    case 'cubism2':
      _OML2D.config.modelSource = 'https://oml-api.tj520.top/Pio/animal-02/index.json';
      break;
    case 'cubism4':
      _OML2D.config.modelSource = 'https://oml-api.tj520.top/m950a_4302/normal/normal.model3.json';
      break;
  }
  setTimeout(() => initialization(L2DModel, importType));
};

export { initialization, createApplication, setup };
