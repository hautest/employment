import { ElementType, HTMLAttributes, createElement } from 'react';
import classNames from 'classnames';
import { sprinkles, Sprinkles } from '../sprinkles.css';

interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  css?: Sprinkles;
}

export function Box({ as = 'div', css = {}, className: propsClassName, ...rest }: BoxProps) {
  const className = classNames(sprinkles(css), propsClassName);

  return createElement(as, { ...rest, className });
}
