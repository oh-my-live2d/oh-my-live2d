export type EventFn = ((...arg) => void) | ((...arg) => Promise<void>);
export type EventType = 'load' | 'hit' | 'stageSlideIn' | 'stageSlideOut';

export type LoadEventFn = ((status: 'loading' | 'success' | 'fail') => void) | ((status: 'loading' | 'success' | 'fail') => Promise<void>);
