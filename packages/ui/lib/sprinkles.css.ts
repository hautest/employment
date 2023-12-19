import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { theme } from './theme.css';

const { colors, spacing, fontWeight, lineHeight } = theme;

const properties = {
  alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
  borderBottomLeftRadius: spacing,
  borderBottomRightRadius: spacing,
  borderBottomWidth: spacing,
  borderLeftWidth: spacing,
  borderRadius: spacing,
  borderRightWidth: spacing,
  borderStyle: ['solid', 'dashed', 'dotted'],
  borderTopLeftRadius: spacing,
  borderTopRightRadius: spacing,
  borderTopWidth: spacing,
  borderWidth: spacing,
  bottom: spacing,
  boxSizing: ['border-box', 'content-box'],
  display: ['none', 'flex', 'block', 'inline-block', 'inline', 'grid'],
  flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
  gap: spacing,
  height: spacing,
  inset: spacing,
  justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
  left: spacing,
  margin: spacing,
  marginBottom: spacing,
  marginLeft: spacing,
  marginRight: spacing,
  marginTop: spacing,
  maxHeight: spacing,
  maxWidth: spacing,
  minHeight: spacing,
  minWidth: spacing,
  outline: ['none'],
  overflow: ['visible', 'hidden', 'scroll', 'auto'],
  overflowX: ['visible', 'hidden', 'scroll', 'auto'],
  overflowY: ['visible', 'hidden', 'scroll', 'auto'],
  padding: spacing,
  paddingBottom: spacing,
  paddingLeft: spacing,
  paddingRight: spacing,
  paddingTop: spacing,
  position: ['absolute', 'relative', 'fixed', 'sticky'],
  right: spacing,
  textAlign: ['center', 'left', 'right'],
  textDecoration: ['overLine', 'underLine'],
  textOverflow: ['ellipsis'],
  top: spacing,
  whiteSpace: ['nowrap', 'pre', 'pre-wrap', 'pre-line', 'break-spaces', 'nowrap'],
  width: spacing,
  wordBreak: ['break-all', 'keep-all', 'break-word', 'normal'],
  zIndex: [-1, 0, 1, 2, 3, 4, 5, 100],
  fontSize: spacing,
  lineHeight,
  fontWeight,
} as const;

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 431px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties,
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  shorthands: {
    align: ['alignItems'],
    borderBottomRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    br: ['borderRadius'],
    direction: ['flexDirection'],
    justify: ['justifyContent'],
    m: ['margin'],
    maxSize: ['maxWidth', 'maxHeight'],
    minSize: ['minWidth', 'minHeight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    p: ['padding'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    size: ['width', 'height'],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    backgroundColor: colors,
    borderColor: colors,
    fill: colors,
  },
} as const);

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
