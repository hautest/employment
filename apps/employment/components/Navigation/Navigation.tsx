import { Box } from 'ui';
import { ReactNode } from 'react';
import MobileNav from './MobileNav';
import ReactiveRender from '../ReactiveRender';

interface NavigationProps {
  children: ReactNode;
}

function Navigation({ children }: NavigationProps) {
  return (
    <ReactiveRender
      desktop={<div>desktop</div>}
      mobile={
        <>
          <Box
            css={{
              height: 'full',
              width: 'full',
              marginBottom: 50,
            }}
          >
            {children}
          </Box>
          <MobileNav />
        </>
      }
      tablet={<div>tablet</div>}
    />
  );
}

export default Navigation;
