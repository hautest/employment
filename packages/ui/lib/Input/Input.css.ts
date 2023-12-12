import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { sprinkles } from '../sprinkles.css';
import { theme } from '../theme.css';

export const inputCss = recipe({
  base: [
    sprinkles({
      outline: 'none',
      width: 'full',
      fontSize: 14,
      fontWeight: 'normal',
      backgroundColor: 'white',
    }),
    style({
      border: 'none',
      caretColor: theme.colors.sky,
      caret: theme.colors.sky,
      selectors: {
        '&:disabled': {
          backgroundColor: theme.colors.disabled,
        },
      },
    }),
  ],
});

export const inputWrapperCss = recipe({
  base: [
    sprinkles({
      borderColor: 'spacer',
      borderWidth: 1,
      borderRadius: 2,
      borderStyle: 'solid',
      width: 'full',
    }),
    style({
      selectors: {
        '&:focus-within': {
          borderColor: theme.colors.sky,
        },
      },
    }),
  ],
  variants: {
    size: {
      normal: sprinkles({
        p: 12,
        height: 44,
      }),
      small: sprinkles({
        py: 8,
        px: 12,
        height: 36,
      }),
    },
    disabled: {
      true: sprinkles({
        backgroundColor: 'disabled',
      }),
      false: sprinkles({
        backgroundColor: 'white',
      }),
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});
