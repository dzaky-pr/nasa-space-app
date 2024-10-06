import { Unity, useUnityContext } from "react-unity-webgl";

export function MainBuild() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl:
      "https://storage.googleapis.com/bucket-tolol-2/webgl/Build/Build%201.0.loader.js",
    dataUrl:
      "https://storage.googleapis.com/bucket-tolol-2/webgl/Build/Build%201.0.data",
    frameworkUrl:
      "https://storage.googleapis.com/bucket-tolol-2/webgl/Build/Build%201.0.framework.js",
    codeUrl:
      "https://storage.googleapis.com/bucket-tolol-2/webgl/Build/Build%201.0.wasm",
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
