import { ReactNode } from 'react';
import ReactiveRender from '../ReactiveRender';
import MobileNav from './mobile/MobileNav';
import DesktopNav from './desktop/DesktopNav';

interface NavigationProps {
  children: ReactNode;
}

function Navigation({ children }: NavigationProps) {
  return (
    <ReactiveRender
      desktop={<DesktopNav>{children}</DesktopNav>}
      mobile={<MobileNav>{children}</MobileNav>}
      tablet={<DesktopNav>{children}</DesktopNav>}
    />
  );
}

export default Navigation;
