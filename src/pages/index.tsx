import Counter from '../features/counter/Counter';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from '@/models/common';
import { MainLayout } from '@/components/layout';
import { LatestUpdate } from '@/features/latest-update/components';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
        {/*<Counter />*/}
      <div style={{width: "100%", height: "800px"}}>
        <LatestUpdate/>
      </div>
    </div>
  );
};

Home.Layout = MainLayout;

export default Home;
