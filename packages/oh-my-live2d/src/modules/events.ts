import { EventFn, EventType } from '../types/events/index.js';

// 事件中心
export class Events {
  private eventMap = new Map<EventType, EventFn[]>();

  add(name: EventType, fn?: EventFn): void {
    if (!fn) {
      return;
    }
    const events = this.eventMap.get(name) || [];

    events.push(fn);
    this.eventMap.set(name, events);
  }

  emit(name: EventType, ...arg: unknown[]): void {
    const eventQueue = this.eventMap.get(name);

    eventQueue?.forEach((fn) => void fn(...arg));
  }
}
