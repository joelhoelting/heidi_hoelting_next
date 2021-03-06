import { createGlobalStyle } from 'styled-components';

const TypographyStyle = createGlobalStyle`
  html, body {
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Alegreya', serif;
    font-weight: normal;
    letter-spacing: 2px;
  }

  p, li, input, label, span, textarea, button {
    font-family: 'Lato', sans-serif;
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
    &:target {
      color: blue;
    }
    &:visited {
      color: inherit;
    }
    &:active {
      color: inherit;
    }
  }
`;

export default TypographyStyle;
