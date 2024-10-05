import Button from "@/components/buttons/Button";
import ButtonLink from "@/components/links/ButtonLink";
import { NumberTicker } from "@/components/text/NumberTicker";
import * as React from "react";
import Globe from "react-globe.gl";

export const GLOBE_TEXTURE =
  "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg";

export default function World() {
  const globeElm = React.useRef<any>();
  const [hoverD, setHoverD] = React.useState<any>();
  const [countries, setCountries] = React.useState({
    total_waste: 0,
    features: [],
  });
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1024);
  const [globeSize, setGlobeSize] = React.useState({
    width: (10 / 12) * window.innerWidth,
    height: window.innerHeight,
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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setGlobeSize({
        width: (10 / 12) * window.innerWidth,
        height: isMobile ? window.innerHeight / 1.5 : window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <section>
      <div className="w-max mx-auto overflow-hidden">
        <Globe
          ref={globeElm}
          onGlobeReady={() => {
            if (globeElm.current) {
              globeElm.current.controls().autoRotate = true;
              globeElm.current.controls().autoRotateSpeed = 0.1;
              globeElm.current.controls().minDistance = 250.0;
            }
          }}
          lineHoverPrecision={0}
          polygonSideColor={() => "rgba(0, 0, 0, 0.8)"}
          polygonStrokeColor={() => "#111"}
          globeImageUrl={GLOBE_TEXTURE}
          backgroundColor="#000000"
          onPolygonHover={setHoverD}
          polygonsData={countries.features}
          width={globeSize.width}
          height={globeSize.height}
          polygonAltitude={(d) => (d === hoverD ? 0.1 : 0.01)}
          polygonsTransitionDuration={300}
          polygonLabel={(p: any) => {
            return `
            <div class="bg-gray-800 text-white p-4 rounded-xl shadow">
                <p>${p.properties.NAME}</p>
                <p>${
                  p.properties.waste_emission == 0
                    ? "-"
                    : new Intl.NumberFormat("en-us").format(
                        p.properties.waste_emission
                      ) + " metric tons"
                }</p>
            </div>
          `;
          }}
        />
      </div>

      <div className="pb-24 flex flex-col gap-8 items-center">
        <div className="text-center space-y-4 px-6">
          <p className="whitespace-pre-wrap text-4xl md:text-8xl font-black text-white">
            <NumberTicker value={countries.total_waste} />
          </p>

          <p className="text-gray-300 text-xl md:text-3xl font-semibold">
            metric tons plastic wastes around the world
          </p>
        </div>

        <ButtonLink href="">Save the earth now</ButtonLink>
      </div>
    </section>
  );
}
