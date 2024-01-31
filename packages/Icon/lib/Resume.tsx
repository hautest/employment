import * as React from 'react';
import type { SVGProps } from 'react';
const SvgResume = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' {...props}>
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 21 7.08 21 8.2 21H12m1-18 6 6m-6-6v4.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C13.76 9 14.04 9 14.6 9H19m0 0v2M9 17h2m-2-4h4M9 9h1m9.269 10.269L21 21m-1-3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0'
    />
  </svg>
);
export default SvgResume;
