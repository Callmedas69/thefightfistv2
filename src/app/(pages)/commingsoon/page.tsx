import React from "react";
import { CommingSoon } from "@/components/mainpage/CommingSoon";
import NavbarGreen from "@/components/mainpage/NavbarGreen";

const CommingSoonPage = () => {
  return (
    <div>
      <div className="fixed top-0 inset-x-0 z-50">
        <NavbarGreen />
      </div>
      <CommingSoon />
    </div>
  );
};

export default CommingSoonPage;
