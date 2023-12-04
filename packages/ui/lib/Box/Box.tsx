import { ElementType, HTMLAttributes, createElement } from 'react';
import { sprinkles, Sprinkles } from '../sprinkles.css';

interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  css?: Sprinkles;
}

export function Box({ as = 'div', css = {}, ...rest }: BoxProps) {
  return createElement(as, { ...rest, className: sprinkles(css ?? {}) });
}
