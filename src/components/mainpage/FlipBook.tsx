"use client";

import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import styles from "@/styles/flip.module.css";

interface PageContent {
  title?: string;
  subtitle?: string;
  content?: string[];
  pageNumber: number;
}

interface Page {
  left: PageContent;
  right: PageContent;
}

const pages: Page[] = [
  {
    left: {
      title: "How to Get",
      subtitle: "$TTS",
      pageNumber: 1,
    },
    right: {
      title: "INTRODUCTION",
      content: [
        "TTS is on Base The Layer 2 blockchain by Coinbase.",
        "You'll need to add Base Network to your wallet and bridge ETH in order to come over!",
        "It's very easy and we'll guide you through it in a few simple steps!",
      ],
      pageNumber: 2,
    },
  },
  {
    left: {
      title: "STEP 1",
      content: [
        "Go to 'Settings' in your wallet and find the networks section.",
        "Add a network manually and enter the following info for Base:",
        "Network Name: Base",
        "RPC Endpoint: https://mainnet.base.org",
        "Chain ID: 8453",
        "Currency Symbol: ETH",
        "Block Explorer: https://basescan.org",
        "CONNECT TO BASE",
        "Once saved, you should be able to connect to Base by selecting it from the network selection menu.",
      ],
      pageNumber: 3,
    },
    right: {
      title: "STEP 2",
      content: [
        "Now you'll need to deposit some ETH onto Base! Here you have a couple options:",
        "1. Withdraw ETH to your Base wallet from Coinbase, Binance, Bybit, or OKX.",
        "2. Bridge ETH to Base from another chain using bridges:",
        " - Official Base Bridge: https://bridge.base.org/deposit",
        " - Relay Link: https://relay.link",
        " - Orbiter: https://www.orbiter.finance/",
        " - Stargate: https://stargate.finance/",
        "Connect your wallet, select the network, and input the ETH amount to bridge.",
      ],
      pageNumber: 4,
    },
  },
];

const FlipBook: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, pages.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const renderPage = (content: PageContent) => (
    <div className="page">
      {content.title && <h2>{content.title}</h2>}
      {content.subtitle && <h3>{content.subtitle}</h3>}
      {content.content && (
        <ul>
          {content.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <div className="pageNumber">{content.pageNumber}</div>
    </div>
  );

  return (
    <Flipper flipKey={currentIndex}>
      <div className="flipbook">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Previous
        </button>
        <Flipped flipId={`page-${currentIndex}`}>
          <div className="book">
            {renderPage(pages[currentIndex].left)}
            {renderPage(pages[currentIndex].right)}
          </div>
        </Flipped>
        <button
          onClick={handleNext}
          disabled={currentIndex === pages.length - 1}
        >
          Next
        </button>
      </div>
    </Flipper>
  );
};

export default FlipBook;
