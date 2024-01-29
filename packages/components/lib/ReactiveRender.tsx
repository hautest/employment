import { ReactNode, useEffect, useState } from 'react';
import { Box } from 'ui';

export interface ReactiveRenderProps {
  mobile: ReactNode;
  tablet: ReactNode;
  desktop: ReactNode;
  screen?: 'desktop' | 'tablet' | 'mobile';
}

export function ReactiveRender({
  desktop,
  mobile,
  tablet,
  screen = 'mobile',
}: ReactiveRenderProps) {
  return (
    <>
      {screen === 'mobile' && <Box>{mobile}</Box>}
      {screen === 'tablet' && <Box>{tablet}</Box>}
      {screen === 'desktop' && <Box>{desktop}</Box>}
    </>
  );
}
