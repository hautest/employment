'use client';

import Link from 'next/link';
import { Box, Flex, Typo } from 'ui';
import { NavItemProps } from '../common/interface';
import { useNavColor } from '../common/hooks/useNavColor';

function MobileNavItem({ children, icon, href }: NavItemProps) {
  const color = useNavColor(href);

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

export default MobileNavItem;
