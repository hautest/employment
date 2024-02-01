import { style } from '@vanilla-extract/css';

export const mobileNavCss = style({
  paddingBottom: 'env(safe-area-inset-bottom)',
  height: 'calc(5rem + env(safe-area-inset-bottom))',
});
