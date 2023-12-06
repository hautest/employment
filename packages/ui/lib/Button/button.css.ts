import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles.css';

export const buttonCss = recipe({
  base: sprinkles({ borderRadius: 4, width: 'fit' }),
  variants: {
    variants: {
      default: [
        sprinkles({
          backgroundColor: 'sky',
          color: 'white',
        }),
        style({ border: 'none' }),
      ],
      secondary: sprinkles({
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'sky',
        color: 'sky',
      }),
    },
    size: {
      large: [
        sprinkles({
          py: 12,
          fontSize: 18,
          fontWeight: 'normal',
          px: 52,
        }),
      ],
      medium: [
        sprinkles({
          py: 8,
          fontSize: 16,
          fontWeight: 'normal',
          px: 28,
        }),
      ],
      small: [
        sprinkles({
          py: 4,
          fontSize: 14,
          fontWeight: 'normal',
          px: 12,
        }),
      ],
    },
  },
  defaultVariants: {
    variants: 'default',
    size: 'large',
  },
});
