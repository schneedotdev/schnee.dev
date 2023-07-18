"use client";
import { useState, useEffect } from "react";
import Icon from "./ui/Icon";

const JumpToTop = ({ slug }: { slug: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible && window.scrollY > 100) {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <a
      href={slug + "#"}
      className={`popup fixed rounded p-4 shadow-md ${
        isVisible ? "visible" : ""
      }`}
      aria-label="scroll to the top of the page"
    >
      <Icon name="uparrow" />
    </a>
  );
};

export default JumpToTop;
