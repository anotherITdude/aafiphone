"use client";
import React from "react";
import Button from "./Button";
import Section from "./Section";
import { motion } from "framer-motion";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";

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
    transition: { duration: 1 },
  };

  const motionSettingsButton = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 2 },
  };
  const locale = usePathname();
  const t = locale === "/" ? en : ar;

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
          <div
            className={`flex flex-col justify-center items-center  mt-[23%]  text-webBlue text-center
         ${locale === "/" ? "font-DIN-Bold" : "font-DINArabic-Black"}`}
          >
            <motion.h1 {...motionSettings} className=" text-5xl text-center">
              {t.buy_and_savor}
              <br />
              {t.be_our_lucky_winner}
            </motion.h1>
            <motion.h3 {...motionSettingsh3} className=" pt-3 pb-2 text-md">
              {t.celebrate_national_day}
            </motion.h3>
            <motion.h2 {...motionSettingsh2} className="pb-6 text-xs ">
              {t.take_home_your_favourite}
              <br className="hidden md:block" />
              {t.of_winning_the_brand_new_iphone}
            </motion.h2>
            <motion.a {...motionSettingsButton} href="#register">
              <Button label={t.register_now} small outline arrow />
            </motion.a>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default LuckyWinner;
