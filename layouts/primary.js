import Head from 'next/head';
import Header from '../includes/header';

import { GlobalStyle, TypographyStyle } from '~/styles/global/_module';

const Layout = ({ children, title }) => (
  <React.Fragment>
    <Head>
      <title>Heidi Hölting {title && `- ${title}`}</title>
    </Head>
    <TypographyStyle />
    <GlobalStyle />
    <Header />
    {children}
  </React.Fragment>
);

export default Layout;