"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { tokenCard } from "@/app/constants";
import { motion } from "framer-motion";
import CopyContractAddress from "./CopyContract";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

const Whitepaper = () => {
  const [open, setOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/TTS_Whitepaper_Oct24.pdf";
    link.download = "TTS_Whitepaper_Oct24.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative bg-[#2a1541] overflow-hidden">
      <div className="flex flex-col mx-auto justify-center items-center text-white py-20 px-4 sm:px-10 lg:w-3/5 w-full">
        <div className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center">
          DYOR. GET THE <span className="text-orange-400">WHITEPAPER</span>
        </div>
        <div>
          <p className="p-5 text-center text-lg sm:text-xl leading-relaxed">
            What are you fighting for? What are you investing in? Do you even
            care? Of course you do! And so you&#39;ll want to read our{" "}
            <span className="text-orange-400 font-bold">whitepaper</span> to
            make sure you&#39;re doing the right thing. So, what are you waiting
            for? Go ahead - click that link. And check our socials, come ask us
            questions in our TG if you still have doubts.
          </p>
        </div>
        <div className="p-5">
          <Button
            className="bg-yellow-500 rounded-none text-xl sm:text-2xl text-black font-semibold px-8 sm:px-10 py-5 sm:py-7 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-orange-300"
            onClick={() => setOpen(true)}
          >
            GET THE WHITEPAPER
          </Button>

          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Download Confirmation</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to download the TTS Whitepaper?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setOpen(false)}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    handleDownload();
                    setOpen(false);
                  }}
                >
                  Yes, Download
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="flex flex-col gap-3 sm:gap-5 items-center border border-slate-400 p-3 rounded-lg text-[3vw] sm:text-xl md:text-xl lg:text-lg font-semibold w-full sm:w-auto overflow-hidden">
          0x7D83B9D9236a97bB3f0d7804E9824445Fc483aE1
          <CopyContractAddress contractAddress="0x7D83B9D9236a97bB3f0d7804E9824445Fc483aE1" />
        </div>

        {/* Token Info */}
        <div className="pt-10 w-full">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-center items-center text-center">
            {tokenCard.map((token, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: [null, 1.1, 1.05] }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-grid-transparent p-5 text-white overflow-hidden text-nowrap">
                  <CardHeader className="lg:text-sm sm:text-sm p-0 italic">
                    {token.header}
                  </CardHeader>
                  <CardContent className="font-bold text-lg lg:text-sm sm:text-xl p-0">
                    {token.content}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
