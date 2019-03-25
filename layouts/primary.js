import Head from 'next/head';
import Header from '../includes/header';
import { withRouter } from 'next/router';

const Layout = props => {
  const title = props.router.pathname.replace('/', '');
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <React.Fragment>
      <Head>
        <title>Heidi Hölting {title && `- ${capitalizedTitle}`}</title>
      </Head>
      <Header />
      {props.children}
    </React.Fragment>
  );
};

export default withRouter(Layout);
