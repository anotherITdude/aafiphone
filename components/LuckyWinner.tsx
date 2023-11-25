"use client";
import React from "react";
import Button from "./Button";
import Section from "./Section";
import { motion } from "framer-motion";
const LuckyWinner = () => {
  const motionSettings = {
    initial: { opacity: 0, y: -20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsh3 = {
    initial: { opacity: 0, y: -20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsh2 = {
    initial: { opacity: 0, y: -15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.5 },
  };

  const motionSettingsButton = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 2 },
  };

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
            <motion.h1 {...motionSettings} className=" text-5xl text-center">
              BUY, SAVOR AND <br />
              BE OUR LUCKY WINNER!
            </motion.h1>
            <motion.h3 {...motionSettingsh3} className=" pt-3 pb-2 text-md">
              Celebrate National Day with Al Ain Farms and seize the chance to
              win big!
            </motion.h3>
            <motion.h2 {...motionSettingsh2} className="pb-6 text-xs ">
              Take home your favourite products at your nearest Lulu Store{" "}
              <br className="block md:hidden" />
              and unwrap the excitement
              <br className="hidden md:block" /> of winning the Brand-New iPhone
              15 PRO MAX!
            </motion.h2>
            <motion.a {...motionSettingsButton} href="#register">
              <Button label="Register Now" small outline arrow />
            </motion.a>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default LuckyWinner;
