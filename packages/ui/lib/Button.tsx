'use client';

import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
}

export function Button({ size, ...rest }: ButtonProps) {
  return <button {...rest}>Click</button>;
}
