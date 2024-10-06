import { Unity, useUnityContext } from "react-unity-webgl";

export function MainBuild() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "build/neutrack.loader.js",
    dataUrl: "build/neutrack.data",
    frameworkUrl: "build/neutrack.framework.js",
    codeUrl: "build/neutrack.wasm",
  });

  return (
    <section
      id="main-build"
      className="z-[999] border-[0.5px] px-4  rounded-lg border-gray-700 flex justify-center  max-w-screen-xl flex-col items-center w-full h-full sm:mx-auto p-4 my-8"
    >
      {!isLoaded && (
        <p className="text-white">
          Loading Application... {Math.round(loadingProgression * 100)}%
        </p>
      )}
      <Unity
        unityProvider={unityProvider}
        id="react-unity-webgl-canvas-1"
        style={{
          visibility: isLoaded ? "visible" : "hidden",
          width: "80%",
          height: "100vh",
        }}
      />
    </section>
  );
}
