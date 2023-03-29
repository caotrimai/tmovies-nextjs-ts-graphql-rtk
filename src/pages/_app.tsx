import Head from 'next/head';
import 'normalize.css';
import '../styles/globals.css';

import { Provider } from 'react-redux';

import store from '../store';
import { AppPropsWithLayout } from '@/models/common';
import { EmptyLayout } from '@/components/layout';

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Layout>
      <Head>
        <title>Simple test website</title>
        <meta name="description for the website" content="PhimHD" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}
