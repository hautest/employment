import { Flex } from 'ui';
import { Interview, Home, File, Community, User } from 'icon';
import NavItem from './NavItem';

function MobileNav() {
  return (
    <Flex
      css={{
        position: 'fixed',
        backgroundColor: 'white',
        left: 0,
        bottom: {
          mobile: 0,
        },
        height: {
          tablet: 'full',
          desktop: 'full',
          mobile: 50,
        },
        direction: {
          desktop: 'column',
          tablet: 'column',
          mobile: 'row',
        },
        width: {
          mobile: 'full',
          desktop: 150,
          tablet: 150,
        },
        justify: {
          desktop: 'flex-start',
          tablet: 'flex-start',
          mobile: 'space-around',
        },
      }}
    >
      <NavItem icon={<Home />} href='/'>
        홈
      </NavItem>
      <NavItem icon={<File />} href='/feedback'>
        첨삭
      </NavItem>
      <NavItem icon={<Community />} href='/community'>
        커뮤니티
      </NavItem>
      <NavItem icon={<Interview />} href='/interview'>
        모의면접
      </NavItem>
      <NavItem icon={<User />} href='/my'>
        내정보
      </NavItem>
    </Flex>
  );
}

export default MobileNav;
