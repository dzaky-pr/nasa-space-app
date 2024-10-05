"use client";

import Layout from "@/layouts/Layout";
import ChatBot from "./sections/chatbot";
import { BentoGallery } from "./sections/gallery";
import Hero from "./sections/hero";
import LookBackGraph from "./sections/lookback";
import { MainBuild } from "./sections/main-build";
import World from "./sections/world";

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
