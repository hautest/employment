import { ReactiveRender } from 'components';
import MobileNav from './MobileNav';

function Navigation() {
  return (
    <ReactiveRender
      desktop={<div>desktop</div>}
      mobile={<MobileNav />}
      tablet={<div>tablet</div>}
    />
  );
}

export default Navigation;
