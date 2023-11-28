import React from "react";
import Section from "./Section";
import Navbar from "./Navbar";

interface HeroInterface {
  title?: string;
}
const Hero: React.FC<HeroInterface> = ({ title }) => {
  return (
    <div>
      <div
        className="hero_mobile md:hero 
    bg-left bg-cover bg-no-repeat
    h-[739px] 
    md:bg-cover md:h-[495px] lg:h-[591px]
    flex flex-col overflow-hidden"
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
