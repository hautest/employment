import { ComponentPropsWithRef, ComponentType, ElementType, createElement } from 'react';
import classNames from 'classnames';
import { sprinkles, Sprinkles } from '../sprinkles.css';

export type BoxProps<C extends ElementType> = {
  as?: C | ComponentType<any>;
  css?: Sprinkles;
} & Omit<ComponentPropsWithRef<C>, 'as'>;

export function Box<C extends ElementType = 'div'>({
  as,
  css = {},
  className: propsClassName,
  ...rest
}: BoxProps<C>) {
  const className = classNames(sprinkles(css), propsClassName);

  return createElement(as || 'div', { ...rest, className });
}
