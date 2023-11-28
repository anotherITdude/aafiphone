'use client'
import React from "react";
import Navbar from "./Navbar";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";

interface HeroInterface {
  title?: string;
}
const Hero: React.FC<HeroInterface> = ({ title }) => {
  const locale = usePathname();
  const t = locale === "/" ? en : ar;

  const herobg = locale === "/"
      ? "hero_mobile md:hero"
      : "hero_mobile_ar md:hero_ar";

  return (
    <div>
      <div
        className={`
        hero_mobile md:hero 
        bg-left bg-contain bg-no-repeat
        h-[739px] 
        md:bg-cover md:h-[495px] lg:h-[591px]
        flex flex-col overflow-hidden
        ${herobg}
        `}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
