'use client';

import { HTMLAttributes } from 'react';
import { buttonCss } from './button.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  variants?: 'default' | 'secondary';
}

export function Button({ size, variants, ...rest }: ButtonProps) {
  return <button {...rest} className={buttonCss({ variants, size })} />;
}
