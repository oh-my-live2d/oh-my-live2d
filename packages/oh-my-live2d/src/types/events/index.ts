export type EventFn = (...arg) => void | Promise<void>;
export type EventType = 'load' | 'hit' | 'stageSlideIn' | 'stageSlideOut';
export type LoadEventFn = (status: 'loading' | 'success' | 'fail') => void | Promise<void>;
