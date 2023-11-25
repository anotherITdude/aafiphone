'use client'
import React from "react";
import RegistrationForm from "./RegistrationForm";
import Section from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";
import form_right from "@/public/logo.svg";

interface RegisterSectionInterface {
  title?: string;
}
const RegisterSection: React.FC<RegisterSectionInterface> = ({
  title,
}) => {
  return (
    <Section>
      <p className="text-center pb-4 text-2xl">{title}</p>
      <div className="flex flex-col md:flex-row justify-evenly ">
        <div className="flex w-full bg-red-200 text-center justify-center items-center min-h-[400px]">
          <div
            className="shadow_h2 uppercase
          text-3xl md:text-4xl lg:text-5xl 
          font-primetime text-white
          pl-4 pb-3 pt-o"
          >
            Registration
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=""
          >
            <Image
              alt="school year"
              placeholder="empty"
              priority={true}
              quality={100}
              src={form_right}
              className="
              w-[120px] sm:w-[150px] 
              md:w-[300px] lg:w-[800px]
              md:hidden lg:block
              absolute md:relative 
              bottom-[1%] 
              left-4"
            />
          </motion.div>
        </div>
        <div className="flex w-full bg-white items-center justify-center min-h-[400px]">
          <RegistrationForm />
        </div>
      </div>
    </Section>
  );
};

export default RegisterSection;
