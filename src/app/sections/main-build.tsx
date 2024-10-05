import { Unity, useUnityContext } from 'react-unity-webgl';

export function MainBuild() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: 'build/build-pre-3.loader.js',
    dataUrl: 'build/build-pre-3.data',
    frameworkUrl: 'build/build-pre-3.framework.js',
    codeUrl: 'build/build-pre-3.wasm',
  });

  return (
    <div className="z-[999] flex justify-center flex-col items-center w-full h-full mx-auto p-4">
      {!isLoaded && <p className="text-white">Loading Application... {Math.round(loadingProgression * 100)}%</p>}
      <Unity unityProvider={unityProvider} style={{ visibility: isLoaded ? 'visible' : 'hidden', width: '90%', height: '100vh' }} />
    </div>
  );
}
