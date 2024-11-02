// app/(pages)/swap/page.tsx

import NavbarSwap from "@/components/mainpage/NavbarSwap";
import SwapComponents from "@/components/Web3App/SwapComponent";
import { WalletComponents } from "@/components/Web3App/WalletComponents";
import React from "react";

export default function SwapPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="relative flex flex-row justify-between items-center px-5 pt-10">
        <section className="w-full justify-center items-center my-auto">
          <NavbarSwap />
        </section>
        <section className="pl-5">
          <WalletComponents />
        </section>
      </div>
      <section className="flex flex-col items-center justify-center flex-grow py-10">
        <SwapComponents />
      </section>
    </div>
  );
}
