import { recipe } from '@vanilla-extract/recipes';

export const centerCss = recipe({
  base: {
    position: 'absolute',
    top: '50%',
  },
  variants: {
    isMobile: {
      true: {
        transform: 'translate(-50%, -50%)',
        left: '50%',
        width: '100%',
      },
      false: {
        transform: 'translate(-50%, -50%)',
        left: 'calc(50% + 8.5rem)',
        width: 'calc(100% - 17rem)',
      },
    },
  },
});
