import { Button, Typo, Box } from 'ui';
import ButtonTest from '../components/ButtonTest';

function Page() {
  return (
    <div>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8',
        }}
      >
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
      <Typo as='p' variant='h1'>
        11
      </Typo>
      <ButtonTest />
    </div>
  );
}

export default Page;
