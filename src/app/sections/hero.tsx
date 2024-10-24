import { RainbowButton } from "@/components/buttons/RainbowButton";
import { Particles } from "@/components/effects/Particles";

import { GradualSpacing } from "@/components/text/GradualSpacing";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative justify-center flex overflow-hidden w-full max-w-screen-xl mx-auto p-4 py-20"
    >
      <div className="text-center">
        <GradualSpacing
          className="font-display mt-20 text-center text-2xl font-bold -tracking-widest text-white md:text-7xl md:leading-[5rem]"
          text="Neutrack AI Cosmos"
        />
        <GradualSpacing
          className="text-center text-sm font-regular -tracking-[0.20em] text-white md:text-lg md:leading-[3rem] pb-4"
          text="Where Science Fiction Meets Reality"
        />

        <Link href="#cosmic-chart">
          <RainbowButton>Learn more</RainbowButton>
        </Link>
      </div>

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
    </section>
  );
}
