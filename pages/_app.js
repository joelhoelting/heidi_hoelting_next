import App, { Container } from 'next/app';

import Layout from '~/layouts/primary';
import { ContainerStyle, GlobalStyle, TypographyStyle, AnimationStyle } from '~/styles/global/_module';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ContainerStyle />
        <TypographyStyle />
        <GlobalStyle />
        <AnimationStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
