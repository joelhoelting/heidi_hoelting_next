import { createGlobalStyle } from 'styled-components';

const TypographyStyle = createGlobalStyle`
  'html, body': {
    fontSize: '100%',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-font-smoothing': 'antialiased',
    '-o-font-smoothing': 'antialiased'
  },
  // Header Text
  'h1, h2, h3, h4, h5, h6': {
    fontfamily: "'Merriweather Sans', sans-serif",
    fontWeight: 'bold'
  },
  'a': {
    textDecoration: 'none'
  },
  'a:hover': {
    textDecoration: 'underline'
  },
  'a:visited': {
    color: 'inherit'
  },
  'a:active': {
    color: 'inherit'
  }
`;

export default TypographyStyle;