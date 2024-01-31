import { Box } from 'ui';
import { PersonalStatement, Community, Home, Interview, Resume, User, Language } from 'icon';
import { NavProps } from '../common/interface';
import DesktopNavItem from './DesktopNavItem';

function DesktopNav({ children }: NavProps) {
  return (
    <>
      <Box
        css={{
          height: 'full',
          width: 'full',
          paddingLeft: 170,
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
          height: 'full',
          width: 170,
          px: 8,
          py: 8,
        }}
      >
        <DesktopNavItem icon={<Home />} href='/'>
          홈
        </DesktopNavItem>
        <DesktopNavItem icon={<Resume />} href='/feedback/resume'>
          이력서 첨삭
        </DesktopNavItem>
        <DesktopNavItem icon={<PersonalStatement />} href='/feedback/personal-statement'>
          자소서 첨삭
        </DesktopNavItem>
        <DesktopNavItem icon={<Interview />} href='/interview'>
          모의 면접
        </DesktopNavItem>
        <DesktopNavItem icon={<Language />} href='/grammar'>
          맞춤법 검사
        </DesktopNavItem>
        <DesktopNavItem icon={<Community />} href='/community'>
          커뮤니티
        </DesktopNavItem>
        <DesktopNavItem icon={<User />} href='/my'>
          내 정보
        </DesktopNavItem>
      </Box>
    </>
  );
}

export default DesktopNav;
