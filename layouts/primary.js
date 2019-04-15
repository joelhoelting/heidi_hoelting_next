import Head from 'next/head';
import { withRouter } from 'next/router';

import Header from '../includes/header';
import { capitalizeFirstLetter } from '../helpers/strings';

const Layout = ({ children, router }) => {
  const title = router.pathname.replace('/', '');
  const capitalizedTitle = capitalizeFirstLetter(title);

  return (
    <React.Fragment>
      <Head>
        <title>Heidi Hölting {title && `- ${capitalizedTitle}`}</title>
      </Head>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default withRouter(Layout);
