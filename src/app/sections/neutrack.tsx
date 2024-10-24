import ButtonLink from "@/components/links/ButtonLink";
import { Unity, useUnityContext } from "react-unity-webgl";

export function Neutrack() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "build/neutrack.loader.js",
    dataUrl: "build/neutrack.data",
    frameworkUrl: "build/neutrack.framework.js",
    codeUrl: "build/neutrack.wasm",
  });

  return (
    <section
      id="moonface"
      className="my-16 mx-4 rounded-lg sm:mx-auto p-6 max-w-screen-xl border-[0.5px] border-gray-700"
    >
      <div className="gap-8 flex flex-col-reverse lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-lg font-regular text-white md:text-2xl pb-0 font-semibold">
            Neutrack AI Glove
          </h1>
          <p className="text-white text-justify py-4 ">
            Imagine exploring the vast wonders of deep space with just your
            voice—where distant galaxies, glowing nebulae, and cosmic phenomena
            come to life through rich descriptions. Our voice-activated
            assistant, powered by advanced computer vision, reimagines cosmology
            for visually impaired students, making the stars accessible like
            never before. From the depths of the universe to your fingertips,
            you can embark on a celestial journey, uncovering the beauty of the
            cosmos without barriers. Whether you're a student or a curious
            explorer, the universe is now yours to discover, guided by your
            voice.
          </p>
          <ButtonLink
            href="https://memoryreboot.pythonanywhere.com/"
            openNewTab
            className="cursor-alias"
          >
            Click for the GPS tracker!
          </ButtonLink>
        </div>

        {!isLoaded && (
          <p className="text-white">
            Loading Application... {Math.round(loadingProgression * 100)}%
          </p>
        )}
        <Unity
          id="react-unity-webgl-canvas-2"
          unityProvider={unityProvider}
          style={{
            visibility: isLoaded ? "visible" : "hidden",
            width: "100%",
            height: "50vh",
          }}
        />
      </div>
    </section>
  );
}
