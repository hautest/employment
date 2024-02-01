'use client';

import { Back } from 'icon';
import { useRouter } from 'next/navigation';
import { Box } from 'ui';

function BackButton() {
  const router = useRouter();

  return (
    <Box
      as='button'
      css={{ size: 25, position: 'absolute', left: 8, color: 'black' }}
      onClick={() => router.back()}
    >
      <Back aria-label='뒤로가기' />
    </Box>
  );
}

export default BackButton;
