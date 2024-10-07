import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import Providers from "@/app/providers";
import { siteConfig } from "@/contents/siteConfig";
import { Announcement } from "./sections/announcement";
import ChatSupport from "./sections/chat-support";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  applicationName: siteConfig.title,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.title,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og/og-long.png`],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og/og-square.png`],
    creator: "@neutrack",
  },
  authors: [
    {
      name: "Neutrack AI Cosmos",
      url: "https://neutrack-ai-cosmos.vercel.app",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon/favicon-48x48.png"
          sizes="48x48"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/images/favicon/favicon.svg"
        />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Neutrack AI Cosmos" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Announcement />
          {children}
          <ChatSupport />
        </Providers>
      </body>
    </html>
  );
}
