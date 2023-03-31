import Head from 'next/head';
import 'normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
        <title>Phim HD - Phim mới | Phim online | Phim Hay | Xem Phim Vietsub</title>
        <meta name='keywords' content='Phim HD,Xem Phim,Phim Online,Phim mới,Phim hay' />
        <meta name='description'
              content='PhimHD.cc - Xem phim mới miễn phí nhanh chất lượng cao,phim lẻ hot nhất với nhiều thể loại đặc sắc,ch phim lẻ hay nhiều thể loại, cập nhập tục tuyển chọn phim lẻ mới  hấp dẫn nhất.' />
        <link rel='canonical' href='https://phimhd.cc/' />
        <link rel='next' href='https://phimhd.cc/PhimLe/' />
        <meta property='og:locale' content='vi_VN' />
        <meta property='og:title' content='PhimHD' />
        <meta property='og:description'
              content='PhimHD.cc - Xem phim mới miễn phí nhanh chất lượng cao,phim lẻ hot nhất với nhiều thể loại đặc sắc,ch phim lẻ hay nhiều thể loại, cập nhập tục tuyển chọn phim lẻ mới  hấp dẫn nhất.' />
        <meta property='og:url' content='https://phimhd.cc/' />
        <meta property='og:site_name' content='PhimHD' />
        <meta property='og:image' content='' />
        <meta property='og:image:width' content='1925' />
        <meta property='og:image:height' content='1925' />
        <meta property='og:image:type' content='image/png' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='renderer' content='webkit|ie-comp|ie-stand' />
        <meta name="theme-color" content="#4e4e4e"/>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}
