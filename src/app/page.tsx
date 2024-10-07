"use client";

import Layout from "@/layouts/Layout";
import ChatSupport from "./sections/chat-support";
import ChatBot from "./sections/chatbot";
import Constellations from "./sections/constellations";
import { BentoGallery } from "./sections/gallery";
import Hero from "./sections/hero";
import LookBackGraph from "./sections/lookback";
import { MainBuild } from "./sections/main-build";

import Moonphase from "./sections/moonphase";
import { Neutrack } from "./sections/neutrack";
import World from "./sections/world";

export default function Home() {
  return (
    <>
      <Layout withFooter withNavbar>
        <ChatSupport />
        <ChatBot />
        <Hero />
        <MainBuild />
        <LookBackGraph />
        <World />
        <Neutrack />
        <Moonphase />
        <Constellations />
        <BentoGallery />
      </Layout>
    </>
  );
}
