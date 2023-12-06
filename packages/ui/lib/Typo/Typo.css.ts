import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles.css';

export const typoCss = recipe({
  base: sprinkles({
    whiteSpace: 'pre-wrap',
  }),
  variants: {
    variants: {
      h1: sprinkles({
        fontSize: 29,
        lineHeight: 124,
        fontWeight: 'semiBold',
      }),
      h2: sprinkles({
        fontSize: 22,
        lineHeight: 128,
        fontWeight: 'semiBold',
      }),
      h3: sprinkles({
        fontSize: 19,
        lineHeight: 128,
        fontWeight: 'bold',
      }),
      h4: sprinkles({
        fontSize: 16,
        lineHeight: 128,
        fontWeight: 'bold',
      }),
      bodyL: sprinkles({
        fontSize: 22,
        lineHeight: 144,
        fontWeight: 'bold',
      }),
      bodyM: sprinkles({
        fontSize: 18,
        lineHeight: 132,
        fontWeight: 'normal',
      }),
      bodyS: sprinkles({
        fontSize: 16,
        lineHeight: 148,
        fontWeight: 'normal',
      }),
      bodyXs: sprinkles({
        fontSize: 14,
        lineHeight: 140,
        fontWeight: 'normal',
      }),
    },
  },
  defaultVariants: {
    variants: 'bodyM',
  },
});
