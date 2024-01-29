import { Box, Flex } from 'ui';
import { Interview, Home, File, Community, User } from 'icon';
import NavItem from './NavItem';
import { mobileNavCss } from './navigation.css';

function MobileNav() {
  return (
    <Box
      css={{
        position: 'fixed',
        backgroundColor: 'white',
        left: 0,
        bottom: 0,
        width: 'full',
      }}
    >
      <Flex
        css={{
          direction: 'row',
          width: 'full',
          justify: 'space-around',
        }}
        className={mobileNavCss}
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
    </Box>
  );
}

export default MobileNav;
