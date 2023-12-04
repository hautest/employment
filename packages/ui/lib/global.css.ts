import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
  fontSize: '62.5%',
  fontFamily: ' Lific, Noto Sans KR, sans-serif',
  minHeight: '100vh',
  '@supports': {
    '(-webkit-touch-callout: none)': {
      minHeight: '-webkit-fill-available',
    },
  },
});

globalStyle('body', {
  height: '100%',
  margin: 0,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle(':focus:not(:focus-visible)', {
  outline: 'none',
});

globalStyle(':not(input, textarea)', {
  WebkitUserSelect: 'none',
});

globalStyle(':focus', {
  outline: 'none !important',
});

globalStyle('*', {
  boxSizing: 'border-box',
  WebkitTouchCallout: 'none',
  WebkitTapHighlightColor: 'transparent',
});

globalStyle(
  'em, del, pre, strong, li9, ul, il, dl, dt, table, tbody, thead, tfoot, nav, main, menu',
  {
    margin: 0,
    padding: 0,
    font: 'inherit',
    verticalAlign: 'baseline',
  }
);

globalStyle('li', {
  listStyle: 'none',
});

globalStyle(
  'input::-webkit-search-decoration, input::-webkit-search-cancel-button, input::-webkit-search-results-button, input::-webkit-search-results-decoration',
  {
    display: 'none',
    WebkitAppearance: 'none',
  }
);

globalStyle('a', {
  textDecoration: 'none',
  color: 'white',
  cursor: 'pointer',
});

globalStyle('button', {
  background: 'transparent',
  cursor: 'pointer',
  border: 'none',
  padding: 0,
});
