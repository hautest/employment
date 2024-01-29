import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { inputCss, inputWrapperCss } from './Input.css';
import { Flex } from '../Flex/Flex';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'normal' | 'small';
  rightNode?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'normal', disabled = false, rightNode, ...rest }: InputProps, ref) => (
    <Flex
      className={inputWrapperCss({
        size,
        disabled,
      })}
      align='center'
    >
      <input disabled={disabled} className={inputCss()} ref={ref} {...rest} />
      {rightNode && rightNode}
    </Flex>
  )
);
