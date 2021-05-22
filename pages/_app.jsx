import { Container } from 'next/app';
import Head from 'next/head';
import Layout from 'components/Layout';
import GlobalStyle from 'components/GlobalStyles';
import './styles.less';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Container>
      <Head>
        <title>Hackathon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
    <GlobalStyle />
  </>
);

export default MyApp;
