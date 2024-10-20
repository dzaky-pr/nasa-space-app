import { HeroVideoDialog } from "@/components/HeroVideoDialog";
import NextImage from "@/components/NextImage";
import { GradualSpacing } from "@/components/text/GradualSpacing";

function Documentation() {
  return (
    <section className="p-4 mx-auto max-w-screen-xl my-8" id="impact">
      <div className="text-start">
        <GradualSpacing
          className="font-display mt-20 text-center text-xl font-bold -tracking-widest text-white md:text-5xl md:leading-[5rem]"
          text="Documentation"
        />
      </div>
      <div className="relative flex flex-col gap-4 mt-3">
        <HeroVideoDialog
          className="block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/ZsofGOah79s?si=O3zruaGyABy6B3WR"
          thumbnailSrc="./images/thumbnail-video-preview.png"
          thumbnailAlt="Neutrack AI Cosmos 30 Seconds Preview"
        />

        <div className="flex flex-col lg:flex-row justify-between rounded-lg p-2 border-[0.5px] border-gray-700">
          <NextImage
            src="/brosur-1.png"
            height={155}
            width={610}
            className="flex w-fit h-auto"
            alt="Brosur Neutrack 1"
          />
          <NextImage
            src="/brosur-2.png"
            height={155}
            width={610}
            className="flex w-fit h-auto"
            alt="Brosur Neutrack 2"
          />
        </div>
      </div>
    </section>
  );
}

export default Documentation;
