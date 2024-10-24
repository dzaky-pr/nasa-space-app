import { BentoCard, BentoGrid } from "@/components/BentoGrid";
import ButtonLink from "@/components/links/ButtonLink";
import { Bot } from "lucide-react";

const features = [
  {
    Icon: Bot,
    name: "Machine Learning Preview",
    description:
      "Integrating machine learning to astrophysics, we are working to modeling datasets.",
    href: "",
    cta: "",
    className: "",
    background: (
      <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)] ">
        <video
          src="./video/constellations-model.mp4"
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

export default function Constellations() {
  return (
    <section
      id="moonface"
      className="mx-4 my-16 sm:mx-auto rounded-lg p-6 max-w-screen-xl border-[0.5px] border-gray-700"
    >
      <div className="gap-8 flex flex-col-reverse lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-center text-lg font-regular text-white md:text-2xl pb-0 font-semibold">
            Neutrack Constellation Prediction Model
          </h1>
          <p className="text-white text-justify py-4">
            This computer vision model is designed to identify constellations
            from images of the night sky. As an additional concept for NeuTrack,
            a device aimed at making the universe more accessible, this model
            provides a way for users to discover which constellations are above
            them without relying on sight. By analyzing images of star-filled
            skies, it accurately classifies the visible constellations, offering
            an intuitive understanding of what's overhead. This innovative tool
            blends astronomy with accessibility, enriching the experience for
            anyone curious about the Cosmos.
          </p>
          <ButtonLink
            href="https://huggingface.co/spaces/SteelAwsm/constellationclassification"
            className="cursor-alias"
            openNewTab
          >
            Let's try our model!
          </ButtonLink>
        </div>

        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
