import Link from 'next/link';
import { ReactNode } from 'react';
import { Box, Typo } from 'ui';

interface LinkTextProps {
  children: ReactNode;
  href: string;
}

function LinkText({ children, href }: LinkTextProps) {
  return (
    <Box as={Link} href={href}>
      <Typo variants='bodyXs' color='approval' css={{ textDecoration: 'underLine' }}>
        {children}
      </Typo>
    </Box>
  );
}

export default LinkText;
