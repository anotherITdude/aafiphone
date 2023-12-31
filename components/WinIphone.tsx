"use client";
import React from "react";
import Button from "./Button";
import Section from "./Section";
import { motion } from "framer-motion";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";

const WinIphone = () => {
  const motionSettings = {
    initial: { opacity: 0, x: 15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsh2 = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsButton = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1.5 },
  };

  const locale = usePathname();
  const t = locale === "/" ? en : ar;

  return (
    <div>
      <div
        className="winiphone_mobile md:winiphone
     bg-contain bg-no-repeat
    h-[600px] 
    md:bg-cover md:h-[495px] lg:h-[591px]
    flex flex-col overflow-hidden"
      >
        <Section className="">
          <div
            className={`flex flex-col items-center  mt-10 md:mt-6
            ${locale === "/" ? "font-DIN-Bold " : "font-DINArabic-Black"}`}
          >
            <div className="flex h-[200px] -ml-8 md:ml-0 ">
              <motion.div
                {...motionSettings}
                className="left flex  justify-items-start  text-webRed
              text-[180px] md:text-[190px] "
              >
                <p className="-mt-[80px] align-top tracking-tighter textShadow">
                  10
                </p>
              </motion.div>
              <div
                className="right flex flex-col  text-webBlue pl-4
              
              "
              >
                <motion.div
                  {...motionSettingsh2}
                  className="text-3xl md:text-5xl  "
                >
                  <div className="mb-1">{t.win_iphone} </div>
                 <div>{t.pro_15_max}</div>
                </motion.div>
                <div className={`flex ${locale === "/" ? "mt-2" : "mt-4"}`}>
                  <motion.a {...motionSettingsButton} href="#register">
                    <Button label={t.register_now} small outline arrow />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default WinIphone;
