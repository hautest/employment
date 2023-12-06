import { ElementType, HTMLAttributes, createElement } from 'react';
import classNames from 'classnames';
import { typoCss } from './Typo.css';
import { sprinkles, Sprinkles } from '../sprinkles.css';

interface TypoProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  as?: ElementType;
  variants?: 'h1' | 'h2' | 'h3' | 'h4' | 'bodyL' | 'bodyM' | 'bodyS' | 'bodyXs';
  color?: Sprinkles['color'];
}

export function Typo({
  as = 'p',
  variants,
  className: propsClassName,
  color = 'black',
  ...rest
}: TypoProps) {
  const className = classNames(typoCss({ variants }), sprinkles({ color }), propsClassName);

  return createElement(as, { ...rest, className });
}
