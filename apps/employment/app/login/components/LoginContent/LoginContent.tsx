import { Button, Flex, Input, Typo } from 'ui';
import Link from 'next/link';
import { viewportCookie } from '../../../../common/utils/cookies/viewportCookie';
import LinkText from '../LinkText';
import { centerCss } from '../../../../common/style/center.css';

function LoginContent() {
  const { getValue } = viewportCookie();
  const viewport = getValue()?.value;
  const isMobile = viewport === 'mobile';

  return (
    <Flex
      direction='column'
      className={centerCss({
        isMobile,
      })}
    >
      <Input placeholder='이메일' />
      <Input placeholder='비밀번호' />
      <Button>로그인</Button>
      <Flex
        as={Link}
        css={{ width: 'full', backgroundColor: 'kakao', justify: 'center', py: 12, br: 4 }}
        href='/'
      >
        <Typo color='black'>카카오로 로그인</Typo>
      </Flex>
      <Flex justify='center' css={{ gap: 4 }}>
        <LinkText href='/find-account'>까먹었어요</LinkText>
        <LinkText href='/sign-up'>회원가입</LinkText>
      </Flex>
    </Flex>
  );
}

export default LoginContent;
