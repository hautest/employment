import { ElementType } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Sprinkles } from '../sprinkles.css';

type FlexProps<C extends ElementType> = Omit<BoxProps<C>, 'css'> & {
  css?: Omit<Sprinkles, 'display' | 'flexDirection' | 'justifyContent' | 'alignItems'>;
  direction?: Sprinkles['flexDirection'];
  justify?: Sprinkles['justifyContent'];
  align?: Sprinkles['alignItems'];
};

export function Flex<C extends ElementType = 'div'>({
  align,
  css = {},
  justify,
  direction,
  ...rest
}: FlexProps<C>) {
  return (
    <Box
      {...(rest as any)}
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
