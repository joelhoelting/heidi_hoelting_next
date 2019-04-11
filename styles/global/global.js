import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, #__next {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
