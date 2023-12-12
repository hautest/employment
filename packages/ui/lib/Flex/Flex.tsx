import { ElementType, HTMLAttributes } from 'react';
import { Box } from '../Box/Box';
import { Sprinkles } from '../sprinkles.css';

interface FlexProps extends HTMLAttributes<HTMLElement> {
  css?: Omit<Sprinkles, 'display' | 'flexDirection' | 'justifyContent' | 'alignItems'>;
  as?: ElementType;
  direction?: Sprinkles['flexDirection'];
  justify?: Sprinkles['justifyContent'];
  align?: Sprinkles['alignItems'];
}

export function Flex({ align, css, justify, direction, ...rest }: FlexProps) {
  return (
    <Box
      {...rest}
      css={{
        display: 'flex',
        direction,
        justify,
        align,
        ...css,
      }}
    />
  );
}
