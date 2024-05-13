import Emittery from 'emittery';

export interface Emitter {
  stageSlideInStart: undefined;
  stageSlideInEnd: undefined;
  stageSlideOutStart: undefined;
  stageSlideOutEnd: undefined;
  modelLoad: 'loading' | 'success' | 'fail';
}
const emitter = new Emittery<Emitter>();

export default emitter;
