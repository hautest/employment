'use client';

import { Box, Button } from 'ui';

function ButtonTest() {
  return (
    <Box>
      <Button
        onClick={() => {
          console.log('test');
        }}
      >
        테스트
      </Button>
      <Button
        onClick={() => {
          console.log('test');
        }}
      >
        테스트
      </Button>
      <Button
        onClick={() => {
          console.log('test');
        }}
      >
        테스트
      </Button>
    </Box>
  );
}

export default ButtonTest;
