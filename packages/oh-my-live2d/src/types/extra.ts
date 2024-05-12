import type { CSSProperties } from './style/index.js';

export interface ElementParams {
  id: string;
  className?: string;
  dataName?: string;
  tagName: string;
  children?: ElementParams[];
  innerHtml?: string;
  innerText?: string;
  style?: CSSProperties;
}
