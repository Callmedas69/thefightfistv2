//app/(pages)/swap/layout.tsx

import "@coinbase/onchainkit/styles.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import { type ReactNode } from "react";
import { cookieToInitialState } from "wagmi";
import { getConfig } from "@/app/wagmi";
import { Providers } from "@/app/providers";
import NavbarSwap from "@/components/mainpage/NavbarSwap";

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

export default function SwapLayout(props: { children: ReactNode }) {
  const initialState = cookieToInitialState(
    getConfig(),
    headers().get("cookie")
  );
  return (
    <div>
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers initialState={initialState}>{props.children}</Providers>
      </div>
    </div>
  );
}
