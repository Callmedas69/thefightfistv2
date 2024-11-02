//app/(pages)/swap/layout.tsx

import "@coinbase/onchainkit/styles.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import OnchainProviders from "@/app/providers";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Swap",
  description: "Swap $TTS directly ",
};

export default function SwapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <OnchainProviders>{children}</OnchainProviders>
    </body>
  );
}
