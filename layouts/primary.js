import Head from 'next/head';
import Header from '../includes/header';

const Layout = ({ children, title }) => (
  <React.Fragment>
    <Head>
      <title>Heidi Hölting {title && `- ${title}`}</title>
    </Head>
    <Header />
    {children}
  </React.Fragment>
);

export default Layout;