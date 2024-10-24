import {
  BookMarked,
  MonitorCheck,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/BentoGrid";

import { TextRevealByWord } from "@/components/text/TextReveal";

const features = [
  {
    Icon: UserRoundCheck,
    name: "User Feedback",
    description:
      "Mr. Eko Purwanto as Principal of Visual Environment Children School of Surabaya",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] ">
        <video
          src="./video/wawancara.MP4"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none h-full w-full object-cover  group-hover:scale-105"
        />
      </div>
    ),
  },
  {
    Icon: UsersRound,
    name: "Social Service ",
    description: "In Collaboration with Computer Vision Laboratory.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] ">
        <video
          src="./video/foto-bareng-cut.MP4"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none h-full w-full object-cover  group-hover:scale-105"
        />
      </div>
    ),
  },
  {
    Icon: BookMarked,
    name: "Education",
    description: "Educating on how to using Neutrack AI Glove.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] ">
        <video
          src="./video/demo-pakai.MP4"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none h-full w-full object-cover  group-hover:scale-105"
        />
      </div>
    ),
  },
  {
    Icon: MonitorCheck,
    name: "Neutrack AI Glove Hands On",
    description: "How Neutrack AI is used.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] ">
        <video
          src="./video/fira-and-neutrack.MP4"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none h-full w-full object-cover  group-hover:scale-105"
        />
      </div>
    ),
  },
];

export function BentoGallery() {
  return (
    <section className="p-4 mx-auto max-w-screen-xl my-8" id="impact">
      <div className="z-10 flex min-h-64 items-center justify-center rounded-lg bg-black">
        <TextRevealByWord text="Neutrack's Partnership with SMPLB YPAB Surabaya." />
      </div>

      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
      <p className="text-white text-justify py-8">
        Based on an interview with Mr. Eko Purwanto, principal of SLB YPAB
        Surabaya stands for "Sekolah Luar Biasa Yayasan Pendidikan Anak Buta
        Surabaya," which is a special needs school dedicated to the education
        and development of children with visual impairments in Surabaya,
        Indonesia, most of the visual impairment students struggling in STEM
        field, due to limitations of the abstract visualization of math and
        physics, this website was made as a learning module to learn basics
        cosmology with Voice User Interface (VUI) where users can enjoy and
        inspired by the sonification of James Webb's Telescope Images while
        traveling together through 13.8 billion years of space and time.
      </p>
    </section>
  );
}
