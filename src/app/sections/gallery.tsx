import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/BentoGrid";

import { TextRevealByWord } from "@/components/text/TextReveal";

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] ">
        <video
          src="https://res.cloudinary.com/dzaky/video/upload/v1728139295/wawancara_e3xyoa.mp4"
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
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] ">
        <video
          src="https://res.cloudinary.com/dzaky/video/upload/v1728151015/foto-bareng-cut_pubfyw.mp4"
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
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] ">
        <video
          src="https://res.cloudinary.com/dzaky/video/upload/v1728139290/demo-pakai_vgkqjg.mp4"
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
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] ">
        <video
          src="https://res.cloudinary.com/dzaky/video/upload/v1728139290/fira-and-neutrack_ndwmp0.mp4"
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
    <section className="p-4 mx-auto max-w-screen-xl" id="impact">
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
