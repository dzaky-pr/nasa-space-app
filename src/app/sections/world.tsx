import ButtonLink from "@/components/links/ButtonLink";
import { NumberTicker } from "@/components/text/NumberTicker";
import dynamic from "next/dynamic";
import * as React from "react";

const GlobeGl = dynamic(() => import("./GlobeGl"), { ssr: false });

export default function World() {
  const [countries, setCountries] = React.useState({
    total_waste: 0,
    features: [],
  });

  React.useEffect(() => {
    fetch("data/countries_with_waste.json")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section
      id="mission my-8"
      className="sm:mx-auto mx-4 rounded-lg max-w-screen-xl border-[0.5px] border-gray-700 p-4"
    >
      <GlobeGl />
      <div className="pb-24 flex flex-col gap-8 items-center">
        <div className="text-center space-y-4 px-6">
          <p className="whitespace-pre-wrap text-4xl md:text-8xl font-black text-white">
            <NumberTicker value={countries.total_waste} />
          </p>

          <p className="text-gray-300 text-xl md:text-3xl font-semibold">
            metric tons plastic wastes around the world
          </p>
        </div>

        <ButtonLink href="https://forms.gle/pxdyea2NgSgLVtK3A" openNewTab>
          Save the earth now!
        </ButtonLink>
      </div>
    </section>
  );
}
