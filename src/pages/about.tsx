import { NextPageWithLayout } from '@/models/common';
import { MainLayout } from '@/components/layout';

const About: NextPageWithLayout = () => {
  return (
    <div>
      About
    </div>
  )
}

About.Layout = MainLayout;

export default About;