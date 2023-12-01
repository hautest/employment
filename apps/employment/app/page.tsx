import { Button, Typo } from 'ui';

function Page() {
  return (
    <div>
      <Button />
      <Typo as='p' variant='h1'>
        11
      </Typo>
      <div className='bg-aaaa desktop:font-medium desktop:text-44 desktop:leading-128 tablet:font-medium tablet:text-32 tablet:leading-128 mobile:font-semiBold mobile:leading-124 mobile:text-29 desktop:bg-link'>
        dsa
      </div>
    </div>
  );
}

export default Page;
