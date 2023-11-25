import React from "react";
import Section from "./Section";
import hero from "@/public/f_hero_right.png";
import Navbar from "./Navbar";

interface HeroInterface {
  title?: string;
}
const Hero: React.FC<HeroInterface> = ({ title }) => {
  return (
    <div>
      <div
        className="hero 
    bg-left bg-cover bg-no-repeat
    h-[619px] 
    md:bg-cover md:h-[495px] lg:h-[591px]
    flex flex-col overflow-hidden"
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
