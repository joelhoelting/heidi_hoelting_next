import Header from '../includes/header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

const Layout = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Header />
    {children}
  </React.Fragment>
);

export default Layout;