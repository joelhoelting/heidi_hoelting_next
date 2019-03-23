import Head from 'next/head';
import Header from '../includes/header';

import GlobalStyle from '~/styles/global';
import TypographyStyle from '../styles/global/typography';

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