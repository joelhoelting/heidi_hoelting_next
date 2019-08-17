import Head from 'next/head';
import { withRouter } from 'next/router';

import Header from '../includes/header';
import { pageTitles, pageDescriptions } from '../data/metaData';

const Layout = ({ children, router }) => {
  const title = router.pathname.replace('/', '') || 'home';

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitles[title]}</title>
        <meta name="description" content={pageDescriptions[title]} />
        <meta property="og:title" content={pageTitles[title]} />
        <meta property="og:url" content="https://heidihoelting.com" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={pageDescriptions[title]} />
        <meta property="og:image" content="/static/images/seo/heidi_hoelting_facebook.jpg" />
        <meta name="twitter:title" content={pageTitles[title]} />
        <meta name="twitter:description" content={pageDescriptions[title]} />
        <meta name="twitter:url" content="https://heidihoelting.com" />
        <meta name="twitter:image" content="/static/images/seo/heidi_hoelting_twitter_card.jpg" />
      </Head>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default withRouter(Layout);
