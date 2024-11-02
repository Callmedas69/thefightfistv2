"use client";

import React from "react";
import { Button } from "../ui/button";
import localFont from "next/font/local";
import Image from "next/image";
import background from "@/assets/homepage/TopBG.png";
import hero from "@/assets/homepage/Hero2.svg";
import launch from "@/assets/homepage/HeroFIGHTLaunch.png";

export const BackWild = localFont({
  src: [
    {
      path: "../../app/fonts/Back-Wild.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

const Hero = () => {
  const scrollToSection = () => {
    document
      .querySelector("#how-to-buy")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden flex justify-center items-center">
      {/* Background Image */}
      {/* <div className="absolute inset-0 -z-10">
        <Image
          src={background}
          alt="background"
          className="w-full h-full object-cover"
          priority
          quality={100}
          fill
        />
      </div> */}
      <div
        className="absolute inset-0 bg-cover bg-center contrast-200 brightness-50 saturate-200 overflow-hidden"
        style={{ backgroundImage: `url(${background.src})` }}
      ></div>

      {/* Content Container */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-[1100px] w-full h-full px-4 lg:px-0 lg:space-x-10 space-y-6 lg:space-y-0">
        {/* Launch Image and Button */}
        <div className="pl-[10%]">
          <div className="flex flex-col items-center z-40 space-y-4">
            <Image
              src={launch}
              alt="launch"
              className="w-[20vw] max-w-[200px] lg:max-w-[250px] h-auto" // Updated width classes for scaling
            />
            <Button
              onClick={scrollToSection}
              className="justify-center items-center mx-auto my-auto bg-yellow-500 rounded-none text-lg md:text-2xl text-black font-semibold px-6 md:px-10 py-4 md:py-7 hover:bg-white hover:shadow-2xl hover:shadow-orange-300"
            >
              HOW TO BUY $TTS
            </Button>
          </div>
        </div>

        {/* Hero Image (Proportionally Scaled and Positioned at Bottom) */}
        <div className="lg:flex hidden absolute bottom-0 right-0 z-10">
          <Image
            src={hero}
            alt="hero"
            width={1000}
            height={1000}
            className="w-[50vw] max-w-[600px] h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
