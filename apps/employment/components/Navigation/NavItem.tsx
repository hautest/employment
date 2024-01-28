'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { Box, Flex, Typo } from 'ui';

interface NavItemProps {
  children: ReactNode;
  icon: ReactNode;
  href: string;
}

function NavItem({ children, icon, href }: NavItemProps) {
  const path = usePathname();
  const color = path === href ? 'sky' : 'black';

  return (
    <Flex
      align='center'
      justify='center'
      direction='column'
      css={{ color, flex: 1 }}
      as={Link}
      href={href}
    >
      <Box
        css={{
          width: 20,
          height: 20,
        }}
      >
        {icon}
      </Box>
      <Typo color={color} variants='bodyXs'>
        {children}
      </Typo>
    </Flex>
  );
}

export default NavItem;
