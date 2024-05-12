import type CSS from 'csstype';

export type CSSProperties = Omit<CSS.Properties, 'width' | 'height'> & {
  width?: number | string;
  height?: number | string;
};
