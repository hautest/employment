'use client';

import { Box, Flex, Typo } from 'ui';
import Link from 'next/link';
import { NavItemProps } from '../common/interface';
import { useNavColor } from '../common/hooks/useNavColor';

function DesktopNavItem({ children, href, icon }: NavItemProps) {
  const color = useNavColor(href);

  return (
    <Flex
      justify='space-between'
      css={{
        color,
        p: 8,
        br: 8,
        backgroundColor: {
          hover: 'spacer',
        },
      }}
      as={Link}
      href={href}
    >
      <Box
        css={{
          width: 24,
          height: 24,
        }}
      >
        {icon}
      </Box>
      <Typo color={color} variants='bodyM'>
        {children}
      </Typo>
    </Flex>
  );
}

export default DesktopNavItem;
