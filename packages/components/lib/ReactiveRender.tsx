import { ReactNode } from 'react';
import { Box } from 'ui';

interface ReactiveRenderProps {
  mobile: ReactNode;
  tablet: ReactNode;
  desktop: ReactNode;
}

export function ReactiveRender({ desktop, mobile, tablet }: ReactiveRenderProps) {
  return (
    <>
      <Box
        css={{
          display: {
            mobile: 'block',
            tablet: 'none',
            desktop: 'none',
          },
        }}
      >
        {mobile}
      </Box>
      <Box
        css={{
          display: {
            mobile: 'none',
            tablet: 'block',
            desktop: 'none',
          },
        }}
      >
        {tablet}
      </Box>
      <Box
        css={{
          display: {
            mobile: 'none',
            tablet: 'none',
            desktop: 'block',
          },
        }}
      >
        {desktop}
      </Box>
    </>
  );
}
