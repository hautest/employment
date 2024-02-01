import { Flex, Typo } from 'ui';
import { ReactNode } from 'react';
import { ReactiveRender } from 'components';
import BackButton from './Back';

export interface HeaderProps {
  title?: string;
  children?: ReactNode;
}

function Header({ title, children }: HeaderProps) {
  return (
    <ReactiveRender
      desktop={null}
      tablet={null}
      mobile={
        <Flex
          as='header'
          align='center'
          justify='center'
          css={{
            height: 50,
            position: 'fixed',
            top: 0,
            left: 0,
            width: 'full',
            backgroundColor: 'white',
          }}
        >
          {children}
          <Typo as='h1'>{title}</Typo>
        </Flex>
      }
    />
  );
}

Header.BackButton = BackButton;
export default Header;
