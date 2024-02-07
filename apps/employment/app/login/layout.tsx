import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Frame from '../../common/components/Frame/Frame';

export const metadata: Metadata = {
  title: '로그인',
  description: '취업 지원 Ai',
};

export default function LoginLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Frame navigation header={{ left: <Frame.Back />, title: '로그인' }}>
      {children}
    </Frame>
  );
}
