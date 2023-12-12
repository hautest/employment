import { Button, Typo, Box, Flex, Input } from 'ui';
import ButtonTest from '../components/ButtonTest';

function Page() {
  return (
    <Flex>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <Input rightNode={<Box>3123</Box>} />
        <Input size='small' rightNode={<Box css={{ minWidth: 'fit' }}>아이콘</Box>} />
        <Input value='abc' disabled />
        <Input value='123' size='small' disabled />
        <Typo color='disabled' variants='h1'>
          123 테스트 Test
        </Typo>
        <Typo variants='h2' color='error'>
          123 테스트 Test
        </Typo>
        <Typo variants='h3' color='sky'>
          123 테스트 Test
        </Typo>
        <Typo variants='h4'>123 테스트 Test</Typo>
        <Typo variants='bodyL'>123 테스트 Test</Typo>
        <Typo variants='bodyM'>123 테스트 Test</Typo>
        <Typo variants='bodyS'>123 테스트 Test</Typo>
        <Typo variants='bodyXs'>123 테스트 Test</Typo>
        <Button variants='secondary'>클릭클릭클릭클릭</Button>
        <Button>클릭클릭클릭클릭</Button>
        <Button variants='secondary' size='medium'>
          클릭클릭클릭클릭
        </Button>
        <Button size='medium'>클릭클릭클릭클릭</Button>
        <Button variants='secondary' size='small'>
          클릭클릭클릭클릭
        </Button>
        <Button size='small'>클릭클릭클릭클릭</Button>
      </Box>
      <ButtonTest />
    </Flex>
  );
}

export default Page;
