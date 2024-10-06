import * as React from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

export default function GlobeGl() {
  const globeElm = React.useRef<GlobeMethods | undefined>(undefined);
  const [hoverD, setHoverD] = React.useState<any>();
  const [countries, setCountries] = React.useState({
    total_waste: 0,
    features: [],
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const [globeSize, setGlobeSize] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1024);
      setGlobeSize({
        width: (10 / 12) * window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
        setGlobeSize({
          width: (10 / 12) * window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

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
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
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
  );
}
