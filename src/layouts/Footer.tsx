import NextImage from "@/components/NextImage";
import { NAVIGATION_MENU } from "@/contents/navigation";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" rounded-lg shadow bg-neutral-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <NextImage
            src="/logo.png"
            className="h-full w-fit"
            height={98}
            width={122}
            alt="Neutrack Logo"
          />

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
            {NAVIGATION_MENU.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:underline me-4 md:me-6">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">
          © {new Date().getFullYear().toString()} Neutrack . All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
}
