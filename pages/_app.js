import App, { Container } from 'next/app';
import Router from 'next/router';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import trackPageView from '../helpers/ga';

import ContextProvider from '../provider/ContextProvider';
import Layout from '../layouts/primary';
import { ContainerStyle, GlobalStyle, TypographyStyle, AnimationStyle } from '../styles/_module';

class MyApp extends App {
  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      trackPageView(url);
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ContextProvider {...this.props}>
        <ContainerStyle />
        <TypographyStyle />
        <GlobalStyle />
        <AnimationStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    );
  }
}

export default MyApp;
