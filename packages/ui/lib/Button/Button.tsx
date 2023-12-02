'use client';

import { HTMLAttributes } from 'react';
import { buttonCss } from './button.css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
}

export function Button({ size, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={buttonCss}>
      Click
    </button>
  );
}
