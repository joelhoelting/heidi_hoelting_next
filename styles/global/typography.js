import { createGlobalStyle } from 'styled-components';

const TypographyStyle = createGlobalStyle`
  html, body {
    fontSize: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a:visited {
    color: inherit;
  }
  a:active {
    color: inherit;
  }
`;

export default TypographyStyle;