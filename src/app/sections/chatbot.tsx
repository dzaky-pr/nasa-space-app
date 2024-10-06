import NextImage from "@/components/NextImage";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";
import Link from "next/link";

export default function ChatBot() {
  return (
    <div className="fixed z-20 right-0 top-[50vh] flex h-[64px] justify-end items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href="https://app.smojo.org/firaniaputri23/neutrack-memobot-for-alzheimer"
              target="_blank"
              className="cursor-alias"
            >
              <NextImage
                src="/mascot-neutrack.png"
                height={64}
                width={64}
                className="hover:animate-bounce -rotate-45"
                alt="Neutrack Mascot"
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent className="absolute z-20 flex h-auto w-auto right-8 top-[50%]">
            <p className="text-white text-center">Ask Me!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
