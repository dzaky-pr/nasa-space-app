import Button from "@/components/buttons/Button";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
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

  const [loadUnity, setLoadUnity] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const handleLoadModel = () => {
    setShowModal(true);
  };

  const confirmLoadModel = () => {
    setShowModal(false);
    setLoadUnity(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const animationVariants = {
    "from-center": {
      initial: { scale: 0.5, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.5, opacity: 0 },
    },
  };

  return (
    <section
      id="main-build"
      className="z-[999] border-[0.5px] px-4  rounded-lg border-gray-700 flex justify-center  max-w-screen-xl flex-col items-center w-full h-full sm:mx-auto p-4 my-8"
    >
      {!loadUnity ? (
        <>
          <Button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleLoadModel}
          >
            See Model
          </Button>
          <p className="text-gray-400 mt-2 text-sm">
            This model is over 200MB and may not load on mobile devices. Please
            use a desktop or laptop for the best experience.
          </p>
        </>
      ) : (
        <>
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
        </>
      )}

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          >
            <motion.div
              variants={animationVariants["from-center"]}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-neutral-800 text-white p-6 rounded-lg max-w-md w-full text-center"
            >
              <h2 className="text-lg font-bold text-yellow-400 mb-4">
                Warning
              </h2>
              <p className="text-gray-300 mb-4">
                This 3D model is over 200MB and may not work well on mobile
                devices. For the best experience, we recommend using a desktop
                or laptop. Do you want to continue?
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={confirmLoadModel}
                >
                  Yes, Continue
                </Button>
                <Button
                  variant="outline"
                  className="bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded"
                  onClick={closeModal}
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
