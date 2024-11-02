"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import onBase from "@/assets/homepage/OnBase.png";
import bigLogo from "@/assets/homepage/TTS_Logo_Large.png";

const Naratives = () => {
  const scrollToSection = () => {
    document
      .querySelector("#how-to-buy")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative bg-[#120026] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-20">
        <div className="flex justify-center md:justify-end items-end pr-0 md:pr-10 overflow-hidden">
          <div className="hidden md:block">
            <Image src={bigLogo} alt="Big Logo" />
          </div>
        </div>
        <div className="flex flex-col text-white px-5 md:px-0 text-center md:text-left items-center md:items-start">
          <div className="font-bold text-4xl md:text-6xl md:w-[60%]">
            WHAT DOES TTS<span> STAND FOR?</span>
          </div>
          <div className="text-lg md:text-xl md:w-[60%]">
            <p className="pt-5 leading-relaxed">
              TTS, a.k.a Trump&#39;s Fight Fist, stands for US! THE PEOPLE! All
              over the world. For our struggle against the Deep State and
              military greed. It is a rallying cry to FIGHT the rigged world and
              elites who try to hold us back and put us down.
            </p>
            <p className="pt-5 leading-relaxed">
              They think they can intimidate us, silence us, take away our
              rights, our ability to think, and our courage to speak freely.
              They&#39;re wrong! We&#39;ll fight them all the way!!!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 pt-10 items-center">
            <Button
              onClick={scrollToSection}
              className="bg-yellow-500 rounded-none text-lg md:text-2xl text-black font-semibold px-8 md:px-10 py-5 md:py-7 hover:bg-white hover:shadow-2xl hover:shadow-orange-300"
            >
              HOW TO BUY $TTS
            </Button>
            <div className="hidden md:block">
              <Image src={onBase} alt="Base" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Naratives;
