import { createGlobalTheme } from '@vanilla-extract/css';

function createObjectWithRemValues(num: number) {
  const result: { [key: string]: string } = {
    full: '100%',
    half: '50%',
    0: '0',
    fit: 'fit-content',
  };
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= num; i++) {
    result[i] = `${(i * 0.1).toFixed(1)}rem`;
  }
  return result;
}

export const theme = createGlobalTheme('*', {
  screen: {
    mobile: '0px',
    tablet: '431px',
    desktop: '1024px',
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
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    bold: '700',
    semiBold: '600',
  },
  spacing: createObjectWithRemValues(100),
  lineHeight: {
    128: '128%',
    132: '132%',
    120: '120%',
    124: '124%',
    144: '144%',
    148: '148%',
    140: '140%',
  },
});
