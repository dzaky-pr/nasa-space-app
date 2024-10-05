import { Unity, useUnityContext } from 'react-unity-webgl';

export function MainBuild() {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'build/build-pre-3.loader.js',
    dataUrl: 'build/build-pre-3.data',
    frameworkUrl: 'build/build-pre-3.framework.js',
    codeUrl: 'build/build-pre-3.wasm',
  });

  return (
    <div className="z-[999] flex flex-col w-full h-full">
      <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
    </div>
  );
}
