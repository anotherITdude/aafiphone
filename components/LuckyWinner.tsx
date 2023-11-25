import React from "react";
import Button from "./Button";
import Section from "./Section";

const LuckyWinner = () => {
  return (
    <div>
      <div
        className="luckyWinner
    bg-right bg-cover bg-no-repeat
    h-[600px] 
    md:bg-cover md:h-[495px] lg:h-[591px]
    flex flex-col overflow-hidden"
      >
        <Section className="relative">
          <div className="flex flex-col justify-center items-center  mt-[23%] font-DIN-Bold text-webBlue text-center">
            <h1 className=" text-5xl text-center">
              BUY, SAVOR AND <br />
              BE OUR LUCKY WINNER!
            </h1>
            <h3 className=" pt-3 pb-2 text-md">
              Celebrate National Day with Al Ain Farms and seize the chance to
              win big!
            </h3>
            <h2 className="pb-6 text-xs ">
              Take home your favourite products at your nearest Lulu Store{" "}
              <br className="block md:hidden" />
              and unwrap the excitement
              <br className="hidden md:block" /> of winning the Brand-New iPhone
              15 PRO MAX!
            </h2>
            <a href="#register">
              <Button label="Register Now" small outline arrow />
            </a>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default LuckyWinner;
