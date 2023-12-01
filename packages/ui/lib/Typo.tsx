import { ElementType, HTMLAttributes } from 'react';

interface TypoProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body-l' | 'body-m' | 'body-s' | 'body-xs';
}

export function Typo({ as, className, variant, ...rest }: TypoProps) {
  return (
    <div
      className='bg-ddd first:desktop:font-medium desktop:text-44 desktop:leading-128 tablet:font-medium tablet:text-32 tablet:leading-128 mobile:font-semiBold mobile:leading-124 mobild:text-29'
      {...rest}
    />
  );
}
