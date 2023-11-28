"use client";
import React from "react";
import Section from "./Section";
import howto_right from "./../public/howtoenter.png";
import Image from "next/image";
import { motion } from "framer-motion";

import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";

const HowToEnter = () => {
  const motionSettingsh2 = {
    initial: { opacity: 0, y: -15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsImage = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2 },
  };

  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  const how_to_title =
    locale === "/"
      ? "howtocard_title font-DIN-Bold"
      : "howtocard_title font-HelveticaNeueLTArabic-Roman pt-0";
  
  const how_to_card =
    locale === "/"
      ? "howtocard font-DIN-Bold"
      : "howtocard font-HelveticaNeueLTArabic-Roman";
  
  
  return (
    <div
      className="howtoenter
    bg-right bg-cover bg-no-repeat
    h-full 
    md:bg-cover md:h-full
    flex flex-col overflow-hidden"
    >
      <Section>
        <div
          className="flex flex-col  md:flex-row justify-center items-center
        pt-10
        "
        >
          <div className="flex h-[619px] justify-center items-center pl-4 pr-4 md:pl-16 ">
            <motion.div
              {...motionSettingsh2}
              className="text-3xl md:text-5xl  lg:text-6xl text-webBlue"
            >
              <div
                className={`
                ${
                  locale === "/"
                    ? "font-DIN-Bold text-5xl md:text-5xl pl-0"
                    : "font-DINArabic-Black text-5xl md:text-6xl pr-4 mt-10 mb-10 md:mt-0"
                }`}
              >
                {t.How_to_enter}
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8 ">
                <div className={how_to_card}>
                  <div className={how_to_title}>{t.step_1}</div>
                  {t.step_1_content}
                </div>
                <div className={how_to_card}>
                  <div className={how_to_title}>{t.step_2}</div>
                  {t.step_2_content}
                </div>
                <div className={how_to_card}>
                  <div className={how_to_title}>{t.step_3}</div>
                  {t.step_3_content}
                </div>
                <div className={how_to_card}>
                  <div className={how_to_title}>{t.step_4}</div>
                  {t.step_4_content}
                </div>
              </div>
              <div
                className={`text-xs mt-8 text-webGray leading-6
              ${
                locale === "/"
                  ? "font-DIN-Bold"
                  : "font-HelveticaNeueLTArabic-Roman"
              }`}
              >
                {t.disclaimer}
              </div>
            </motion.div>
          </div>
          <motion.div
            {...motionSettingsImage}
            className={`w-[400px] md:min-w-[500px] mt-6 md:mt-0 
            ${locale === "/" ? "mr-6" : "ml-2 pt-10"}
            `}
          >
            <Image alt="how to enter" src={howto_right} />
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default HowToEnter;
