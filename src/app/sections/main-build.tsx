import { Unity, useUnityContext } from "react-unity-webgl";

export function MainBuild() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "build/build-pre-5.loader.js",
    dataUrl: "build/build-pre-5.data",
    frameworkUrl: "build/build-pre-5.framework.js",
    codeUrl: "build/build-pre-5.wasm",
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
          width: "80%",
          height: "100vh",
        }}
      />
    </section>
  );
}
