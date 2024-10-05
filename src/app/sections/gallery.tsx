import { CalendarIcon, FileTextIcon } from '@radix-ui/react-icons';
import { BellIcon, Share2Icon } from 'lucide-react';

import { BentoCard, BentoGrid } from '@/components/BentoGrid';
import clsxm from '@/lib/clsxm';
import { TextRevealByWord } from '@/components/text/TextReveal';

const files = [
  {
    name: 'bitcoin.pdf',
    body: 'Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.',
  },
  {
    name: 'finances.xlsx',
    body: 'A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.',
  },
  {
    name: 'logo.svg',
    body: 'Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.',
  },
  {
    name: 'keys.gpg',
    body: 'GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.',
  },
  {
    name: 'seed.txt',
    body: 'A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.',
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: 'Save your files',
    description: 'We automatically save your files as you type.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <div className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] ">
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={clsxm(
              'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
              'border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]',
              'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none'
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <source src="https://res.cloudinary.com/dzaky/video/upload/v1728151015/foto-bareng-cut_pubfyw.mp4" type="video/mp4" />
                {/* <figcaption className="text-sm font-medium text-white ">{f.name}</figcaption> */}
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </div>
    ),
  },
  {
    Icon: BellIcon,
    name: 'Notifications',
    description: 'Get notified when something happens.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: <source src="https://res.cloudinary.com/dzaky/video/upload/v1728151015/foto-bareng-cut_pubfyw.mp4" type="video/mp4" />,
  },
  {
    Icon: Share2Icon,
    name: 'Integrations',
    description: 'Supports 100+ integrations and counting.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: <div className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />,
  },
  {
    Icon: CalendarIcon,
    name: 'Calendar',
    description: 'Use the calendar to filter your files by date.',
    className: 'col-span-3 lg:col-span-1',
    href: '#',
    cta: 'Learn more',
    background: <div className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"></div>,
  },
];

export function BentoGallery() {
  return (
    <section className="p-4 mx-auto max-w-screen-xl" id="gallery">
      <div className="z-10 flex min-h-64 items-center justify-center rounded-lg bg-black">
        <TextRevealByWord text="Neutrack's Partnership with SMPLB YPAB Surabaya." />
      </div>

      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
      <p className="text-white text-justify py-8">
        Based on an interview with Mr. Eko Purwanto, principal of SLB YPAB Surabaya stands for "Sekolah Luar Biasa Yayasan Pendidikan Anak Buta Surabaya," which is a special needs school dedicated to the education and development of
        children with visual impairments in Surabaya, Indonesia, most of the visual impairment students struggling in STEM field, due to limitations of the abstract visualization of math and physics, this website was made as a learning
        module to learn basics cosmology with Voice User Interface (VUI) where users can enjoy and inspired by the sonification of James Webb's Telescope Images while traveling together through 13.8 billion years of space and time.
      </p>
    </section>
  );
}
