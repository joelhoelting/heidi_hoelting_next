import App, { Container } from 'next/app';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ContextProvider from '../provider/ContextProvider';
import Layout from '../layouts/primary';
import { ContainerStyle, GlobalStyle, TypographyStyle, AnimationStyle } from '../styles/_module';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ContextProvider {...this.props}>
          <ContainerStyle />
          <TypographyStyle />
          <GlobalStyle />
          <AnimationStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      </Container>
    );
  }
}
