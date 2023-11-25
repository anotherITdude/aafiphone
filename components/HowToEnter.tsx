'use client'
import React from 'react'
import Section from './Section'
import howto_right from "./../public/howtoenter.png";
import Image from 'next/image';
import { motion } from 'framer-motion';

const HowToEnter = () => {

  const motionSettingsh2 = {
    initial: { opacity: 0, y: -15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsImage= {
    initial: { opacity: 0, },
    whileInView: { opacity: 1, },
    transition: { duration: 2 },
  };

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
          <div className="flex h-[619px] justify-center items-center md:pl-16 ">
            <motion.div
              {...motionSettingsh2}
              className="text-3xl md:text-5xl  lg:text-6xl text-webBlue font-DIN-Bold"
            >
              How to Enter
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8 ">
                <div className="howtocard">
                  <div className="howtocard_title">STEP 1</div>
                  Purchase Al Ain Farms FRESH CHICKEN, FRESH MILK, LONG LIFE
                  MILK, FRUIT MIX, FRESH EGGS, or FRESH YOGURT that have
                  promotional QR Code on them.
                </div>
                <div className="howtocard">
                  <div className="howtocard_title">STEP 2</div>
                  Scan the QR Code using your Smartphone or Tablet.
                </div>
                <div className="howtocard">
                  <div className="howtocard_title">STEP 3</div>
                  Register on the microsite after scanning the QR Code & upload
                  the Purchase Receipt.
                </div>
                <div className="howtocard">
                  <div className="howtocard_title">STEP 4</div>
                  Submit your entry to enter the draw.
                </div>
              </div>
              <div className="text-xs mt-8 text-webGray leading-6">
                * This promotion is valid on select Al Ain Farms products.
                Products include: Fresh Chicken, Fresh Milk, Long Life Milk,
                Fruit Mix, Fresh Eggs, or Fresh Yoghurt. Head to your nearest
                Lulu stores to participate!
              </div>
            </motion.div>
          </div>
          <motion.div
            {...motionSettingsImage}
            className="w-[300px] md:min-w-[500px] mt-6 md:mt-0 "
          >
            <Image alt="how to enter" src={howto_right} />
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

export default HowToEnter
