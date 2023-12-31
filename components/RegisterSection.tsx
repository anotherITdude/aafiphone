'use client'
import React from "react";
import RegistrationForm from "./RegistrationForm";
import Section from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";
import lulu_logo from "../public/lulu_logo.png";
import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";

interface RegisterSectionInterface {
  title?: string;
}
const RegisterSection: React.FC<RegisterSectionInterface> = ({
  title,
}) => {

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
    <div id="register">
      <div className="flex flex-col md:flex-row justify-evenly ">
        <div
          className="w-full bg-red-200 text-center justify-center items-center min-h-[400px]
        hidden md:flex"
        >
          <div
            className="registration_left
    bg-right bg-cover bg-no-repeat
    h-[620px] w-full"
          >
            <Section>
              <div className="flex flex-col w-[45%] float-right">
                <motion.div
                  {...motionSettings}
                  className="  text-webRed
              text-[150px] md:text-[150px] mt-6 "
                >
                  <p className="tracking-tighter text-center -ml-6 textShadow font-DIN-Bold">
                    10
                  </p>
                </motion.div>
                <motion.div
                  {...motionSettingsh2}
                  className={`text-3xl md:text-3xl text-webBlue -mt-10
                  ${locale === "/" ? "font-DIN-Bold" : "font-DINArabic-Black"}
                  `}
                >
                  {t.win_iphone} <br />
                  {t.pro_15_max}
                </motion.div>
                <div
                  className={`mt-8 mb-8  flex relative
                  ${
                    locale === "/"
                      ? "md:ml-[7%] lg:ml-[18%]"
                      : "md:ml-[0%] lg:ml-[0%]"
                  }`}
                >
                  <hr className="text-webBlue w-[90%]" />
                  <div
                    className={`onlyAt
                  ${
                    locale === "/"
                      ? "font-DIN-Bold"
                      : "font-DINArabic-Black onlyAt_ar"
                  }`}
                  >
                    {t.only_at}
                  </div>
                </div>
                <div className="flex mt-0 justify-center items-center">
                  <Image width={180} alt="lulu logo" src={lulu_logo} />
                </div>
              </div>
            </Section>
          </div>
        </div>
        <div className="flex w-full bg-white  justify-center min-h-[400px]">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
