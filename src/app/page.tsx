'use client';

import Layout from '@/layouts/Layout';
import Hero from './sections/hero';
import { MainBuild } from './sections/main-build';
import ChatBot from './sections/chatbot';
import LookBackGraph from './sections/lookback';
import World from './sections/world';
import { BentoGallery } from './sections/gallery';

export default function Home() {
  return (
    <>
      <Layout withFooter withNavbar>
        <ChatBot />
        <Hero />
        <MainBuild />
        <LookBackGraph />
        <World />
        <BentoGallery />
      </Layout>
    </>
  );
}
