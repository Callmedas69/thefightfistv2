import React from "react";
import Image from "next/image";
import CopyContractAddress from "./CopyContract";
import { tokenInfo } from "@/app/constants";
import Uniswap from "@/assets/homepage/uniswap.svg";
import Link from "next/link";
import bigLogo from "@/assets/homepage/TTS_Logo_Large.png";
import NavbarGreen from "./NavbarGreen";

const WhitepaperPage = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 inset-x-0 z-50">
        <NavbarGreen />
      </div>
      <div className="w-full h-screen flex flex-col">
        <div className="flex flex-row flex-grow">
          {/* Left Side - Full Height and Half Width */}
          <div className="w-1/2 h-full bg-[#120029] text-white flex flex-col justify-center items-center relative">
            <p className="absolute top-1/4 text-5xl font-bold z-10">
              WHITEPAPER
            </p>
            <p className="absolute top-1/3 text-2xl font-bold z-10">
              TRUMP&#39;S FIGHT FIST &#40;$TTS&#41;
            </p>

            <Image
              src={bigLogo}
              alt="logo"
              className="absolute inset-0 p-10 w-full h-full object-cover filter blur-md opacity-30"
            />
            <div className="absolute bottom-0 px-5 bg-gray-200 text-black text-xs italic py-3">
              <p className="font-bold">LEGAL DISCLAIMER</p>
              <p>
                PLEASE READ THE ENTIRELY OF THIS “LEGAL DISCLAIMER” SECTION
                CAREFULLY. NOTHING HEREIN CONSTITUTES LEGAL, FINANCIAL, BUSINESS
                OR TAX ADVICE AND YOU ARE STRONGLY ADVISED TO CONSULT YOUR OWN
                LEGAL, FINANCIAL, TAX OR OTHER PROFESSIONAL ADVISOR&#39;S BEFORE
                ENGAGING IN ANY ACTIVITY IN CONNECTION HERE WITH ANY OF THE
                PROJECT EARLY CONTRIBUTORS, WHO HAVE WORKED ON THE TFF ECOSYSTEM
                &#40;AS DEFINED HEREIN&#41; OR PROJECT TO DEVELOP THE TTS
                ECOSYSTEM IN ANY WAY WHATSOEVER, ANY DISTRIBUTOR AND/OR VENDOR
                OF TTS TOKENS &#40;OR SUCH OTHER RE-NAMED OR SUCCESSOR TICKER
                CODE OR NAME OF SUCH TOKENS&#41; &#40;THE DISTRIBUTOR&#41;, NOR
                ANY SERVICE PROVIDER SHALL BE LIABLE FOR ANY KIND OF DIRECT OR
                INDIRECT DAMAGE OR LOSS WHATSOEVER WHICH YOU MAY SUFFER IN
                CONNECTION WITH ACCESSING THE PAPER, DECK OR MATERIAL RELATING
                TO TTS &#40;THE TOKEN DOCUMENTATION&#41; AVAILABLE ON THE
                WEBSITE AT FIGHTFIST.COM &#40;THE WEBSITE, INCLUDING ANY
                SUBDOMAINS THEREON&#41; OR ANY OTHER WEBSITES OR MATERIALS
                PUBLISHED OR COMMUNICATED BY THE COMPANY OR ITS REPRESENTATIVES
                FROM TIME TO TIME.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 h-full flex flex-col justify-center items-start px-20 overflow-auto">
            <div className="w-[80%] pt-24">
              <p className="font-bold text-2xl py-5">
                TTS - Trump&#39;s “FIGHT!” Fist represents:
              </p>
              <p className="text-lg py-2">
                <span className="font-bold">REBEL</span> - against the rigged
                world, elections, media.
              </p>
              <p className="text-lg py-2">
                <span className="font-bold">DETERMINATION</span> - to do the
                right thing, no matter the enemies.
              </p>
              <p className="text-lg py-2">
                <span className="font-bold">VICTORY</span> - despite the odds,
                system against, and the deep state.
              </p>
              <p className="text-lg py-2">
                When you buy Trump&#39;s &#34;FIGHT &#33;&#34; Fist
                &#40;TTS&#41;, you scream FIGHT, as strong, as loud, and as
                powerful as Mr. President did when he got shot.
              </p>
              <p className="text-lg py-2">
                TTS token is on the BASE chain where the growing all-American,
                largest exchange chain is born.
              </p>
            </div>

            <div className="py-5">
              <Link href={tokenInfo[0].tradeUniswap} target="_blank">
                <div className="relative flex items-center gap-4 p-4 border rounded-3xl bg-indigo-950 text-white shadow-md hover:drop-shadow-xl hover:shadow-fuchsia-400">
                  <div className="absolute -left-4">
                    <Image
                      src={Uniswap}
                      alt="Uniswap"
                      className="rounded-full bg-white shadow-lg object-cover"
                      width={75}
                      height={75}
                    />
                  </div>

                  <div className="ml-16">
                    <p className="text-lg font-semibold">
                      Trade TTS at UniSwap.org on Base Chain
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="pt-5">
              <p className="font-bold text-lg">CONTRACT ADDRESS</p>
              <p className="flex flex-row text-lg items-center gap-5 pr-5">
                {tokenInfo[0].contractAddress}
                <CopyContractAddress
                  contractAddress={tokenInfo[0].contractAddress}
                />
              </p>
            </div>

            <div className="text-lg pt-5">
              <span className="font-bold">TICKER</span>: {tokenInfo[0].ticker}
            </div>
            <div className="text-lg pt-5">
              <span className="font-bold">CHAIN</span>: {tokenInfo[0].chain}
            </div>

            {/* SUPPLY AND TAX */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="font-bold text-lg pt-2">TOTAL SUPPLY</p>
                <p className="text-lg">{tokenInfo[0].totalSupply}</p>
              </div>
              <div>
                <p className="font-bold text-lg pt-2">BUY TAX</p>
                <p>{tokenInfo[0].buyTax}</p>
              </div>
              <div>
                <p className="font-bold text-lg pt-2">CIRCULATING SUPPLY</p>
                <p>{tokenInfo[0].circulatingSupply}</p>
              </div>
              <div>
                <p className="font-bold text-lg pt-2">SELL TAX</p>
                <p>{tokenInfo[0].sellTax}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
      </div>
    </div>
  );
};

export default WhitepaperPage;
