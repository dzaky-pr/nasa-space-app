'use client';

import Layout from '@/layouts/Layout';
import Hero from './sections/hero';
import { MainBuild } from './sections/main-build';
import LookBackGraph from './sections/lookback';

export default function Home() {
  return (
    <Layout withFooter withNavbar>
      <Hero />
      {/* <div className="bg-white flex w-full"> */}
      <MainBuild />
      {/* <div suppressHydrationWarning> */}
      <LookBackGraph />
      {/* </div> */}
      {/* </div> */}
    </Layout>
  );
}
