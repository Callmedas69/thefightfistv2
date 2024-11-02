"use client";

import React from "react";
import Image from "next/image";
import OxD from "@/assets/team/OxD_Hover.png";
import Barret from "@/assets/team/Barrett_Hover.png";
import Blackswan from "@/assets/team/BlackSwan_Hover.png";
import DMan from "@/assets/team/DMan_Hover.png";
import MrGreen from "@/assets/team/MrGreen_Hover.png";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const teamList = [
  {
    name: "Blackswan",
    position: "Co-Founder / COO",
    photo: Blackswan,
  },
  {
    name: "MrGreen",
    position: "Co-Founder / COO",
    photo: MrGreen,
  },
  {
    name: "0xD",
    position: "Tech Lead",
    photo: OxD,
  },
  {
    name: "Barret",
    position: "A.I Alchemist",
    photo: Barret,
  },
  {
    name: "D Man",
    position: "Special Advisor",
    photo: DMan,
  },
];

const Team = () => {
  return (
    <div className="relative bg-[#2a1541] py-20 px-4 sm:px-8">
      <div className="flex flex-col mx-auto justify-center items-center text-white text-center w-full lg:w-[60%]">
        <div className="font-bold text-4xl lg:text-6xl">
          MEET THE <span className="text-orange-400">TEAM</span>
        </div>
        <div className="pt-5 w-full sm:w-[80%] lg:w-[80%]">
          <p className="text-center text-lg lg:text-xl leading-relaxed">
            Trusted and dedicated members themselves, MrGreen & Blackswan come
            from the 350k strong Blockchain Whispers community. Both with
            several years of high-rank within the community we chosen by D Man,
            the BCW Founder to lead the FIGHT!
          </p>
        </div>
        <div className="flex flex-col sm:flex-col lg:flex-row lg:gap-4 gap-8 py-10 justify-center items-center text-nowrap">
          {teamList.map((team, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: [null, 1.2, 1.1] }}
              transition={{ duration: 0.3 }}
              className="w-full sm:w-auto lg:w-1/5 flex justify-center"
            >
              <Card
                key={index}
                className="w-[90%] sm:w-[75%] lg:w-full hover:shadow-2xl hover:shadow-white"
              >
                <CardContent className="p-0 bg-[#120029] flex justify-center items-center">
                  <Image
                    src={team.photo}
                    alt={team.name}
                    className="filter grayscale hover:grayscale-0 duration-300"
                  />
                </CardContent>
                <CardFooter className="flex flex-col bg-[#d9d9d9] text-[#050505]">
                  <CardTitle>
                    <p className="font-semibold text-[10px] lg:text-xl pt-5">
                      {team.name}
                    </p>
                  </CardTitle>
                  <p className="text-[10px]">{team.position}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="w-full sm:w-[80%] lg:w-[80%]">
          <p className="text-center text-lg lg:text-xl leading-relaxed">
            The overall TTS team consists of 14 members covering Operations,
            Social Media, Marketing, and Community Development. We&#39;re always
            on the lookout for extra help, so keep an eye on our TG for future
            opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
