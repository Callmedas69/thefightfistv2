// components/ScrollToTopButton.tsx

"use client";

import { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            padding: "1rem",
            width: "4rem",
            height: "4rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
            fontSize: "1rem",
          }}
          aria-label="Scroll to top"
        >
          top
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
