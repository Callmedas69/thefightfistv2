"use client";

import React, { useState } from "react";
import { Copy } from "lucide-react";

// Define the types for the component's props
interface CopyContractAddressProps {
  contractAddress: string;
}

const CopyContractAddress: React.FC<CopyContractAddressProps> = ({
  contractAddress,
}) => {
  const [copied, setCopied] = useState(false);

  // Function to copy the contract address
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      // Reset the copied state after a short delay
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-2 p-2 bg-transparent rounded-full shadow flex items-center hover:bg-blue-400"
    >
      <Copy size={16} className="gap-5" />
      <span>{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
};

export default CopyContractAddress;
