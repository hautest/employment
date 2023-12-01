import { Config } from 'tailwindcss';

// const spacing = Object.assign(
//   {},
//   // eslint-disable-next-line @typescript-eslint/comma-dangle
//   ...Array.from({ length: 201 }, (_, i) => ({ [i]: `${(i * 0.1).toFixed(1)}rem` }))
// );

export const theme: Config['theme'] = {
  screens: {
    tablet: '431px',
    desktop: '1024px',
    mobile: '0px',
  },
  colors: {
    approval: '#009898',
    attention: '#FF9500',
    background: '#F5F3F7',
    black: '#1A141F',
    border: '#ABA7AF',
    disabled: '#D4D2D5',
    error: '#D51A52',
    hint: '#483A5A',
    light: '#E5EDD8',
    link: '#0F0BAB',
    spacer: '#D9D1E0',
    white: '#FFFFFF',
    sky: '#95C6EE',
    kkk: '#bf4ea3',
    mmm: '#24536e',
    aaaa: '#65cf48',
    abab: '#cf6148',
  },
  extend: {
    // spacing,
    fontWeight: {
      normal: '400',
      medium: '500',
      bold: '700',
      semiBold: '600',
    },
    // fontSize: spacing,
    lineHeight: {
      128: '128%',
      132: '132%',
      120: '120%',
      124: '124%',
      144: '144%',
      148: '148%',
      140: '140%',
    },
  },
};
