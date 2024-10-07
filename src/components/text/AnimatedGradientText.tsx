import clsxm from "@/libs/clsxm";
import { ReactNode } from "react";

export function AnimatedGradientText({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsxm(
        "group relative  mx-auto flex max-w-fit flex-row items-center justify-center  px-4 py-1.5 text-sm font-medium  backdrop-blur-sm  duration-500 ease-out [--bg-size:300%] dark:bg-black/40",
        className,
      )}
    >
      <div
        className={`absolute border-0 inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />

      {children}
    </div>
  );
}
