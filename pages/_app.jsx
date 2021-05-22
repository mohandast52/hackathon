import { Container } from 'next/app';
import Head from 'next/head';
import './styles.less';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Container>
      <Head>
        <title>Hackathon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </Container>
  </>
);

export default MyApp;
