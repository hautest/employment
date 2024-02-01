import { Box, Flex } from 'ui';
import { Interview, Home, File, Community, User } from 'icon';
import { cookies } from 'next/headers';
import { mobileNavCss } from './mobileNav.css';
import MobileNavItem from './MobileNavItem';
import { NavProps } from '../common/interface';

function MobileNav({ children }: NavProps) {
  const { value: accessToken } = cookies().get('accessToken') || {};

  return (
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
          <MobileNavItem icon={<Home />} href='/'>
            홈
          </MobileNavItem>
          <MobileNavItem icon={<File />} href='/feedback'>
            첨삭
          </MobileNavItem>
          <MobileNavItem icon={<Community />} href='/community'>
            커뮤니티
          </MobileNavItem>
          <MobileNavItem icon={<Interview />} href='/interview'>
            모의면접
          </MobileNavItem>
          <MobileNavItem icon={<User />} href={accessToken ? '/my' : '/login'}>
            {accessToken ? '내정보' : '로그인'}
          </MobileNavItem>
        </Flex>
      </Box>
    </>
  );
}

export default MobileNav;
