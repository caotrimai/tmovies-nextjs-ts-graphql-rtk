import Image from 'next/image';
import Head from 'next/head';

import Counter from '../features/counter/Counter';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from '@/models/common';
import { MainLayout } from '@/components/layout';
import Logo from '@/public/logo.svg';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      HOME
        {/*<Counter />*/}
    </div>
  );
};

Home.Layout = MainLayout;

export default Home;
