import { Box } from 'ui';
import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';

interface FrameProps {
  header?: {
    title?: string;
    left?: ReactNode;
    right?: ReactNode;
  };
  children: ReactNode;
  navigation?: boolean;
}

function Frame({ header, children, navigation }: FrameProps) {
  const { left, right, title } = header || {};
  const viewport = cookies().get('viewport')?.value;

  return (
    <Box css={{ paddingTop: header ? 50 : 0 }}>
      {header && viewport === 'mobile' && (
        <Header title={title}>
          {left}
          {right}
        </Header>
      )}
      {navigation ? <Navigation>{children}</Navigation> : children}
    </Box>
  );
}

Frame.Back = Header.BackButton;
export default Frame;
