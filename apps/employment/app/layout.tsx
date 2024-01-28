import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Box } from 'ui';
import Navigation from '../components/Navigation/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '취업',
  description: '취업 지원 Ai',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navigation />
        <Box
          css={{
            marginBottom: {
              mobile: 50,
            },
            marginLeft: {
              desktop: 150,
              tablet: 150,
            },
          }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
