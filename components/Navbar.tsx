"use client";
import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

type RouteToLanguage = { [key: string]: string };

// Define the Navbar component
const Navbar = () => {
  // Retrieve current locale and supported locales
  const locale = usePathname();
  const locales = ["en", "ar"];
  const router = useRouter();

  // Define state to track selected language
  const [selectedLanguage, setSelectedLanguage] = useState(locale);

  // Function to handle language change
  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    setSelectedLanguage(lang);
    const route = lang === "ar" ? "/ar" : "/";
    router.push(route);
  };

  // Effect to update selectedLanguage based on the route
  useEffect(() => {
    // Map the route to the corresponding language
    const routeToLanguage: RouteToLanguage = {
      "/": "en",
      "/ar": "ar",
    };

    // Set the selectedLanguage based on the current route
    setSelectedLanguage(routeToLanguage[locale] || "en");
  }, [locale]);

  // Return JSX for the Navbar component
  return (
    <motion.nav className="flex justify-between pl-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-neosans-medium uppercase flex justify-center items-center gap-[3px]"
      >
        <div className={`${locale === "/ar" ? "pr-4" : ""}`}>
          <select
            className={` 
            bg-webLiterGray w-[150px] pt-3 pb-3
            border-b-[0.5px] border-webWhite text-md text-webGray
            font-DIN-Bold outline-none
            ${locale === "/" ? "pl-0" : "pr-0"}
            `}
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            {locales.map((lang) => (
              <option className="" key={lang} value={lang}>
                {lang === "ar" ? "Arabic" : "English"}
              </option>
            ))}
          </select>
        </div>
      </motion.div>
      <motion.div className="pt-4 pr-4 ">
        <Link href="/">
          <Image
            quality={100}
            placeholder="empty"
            src={logo}
            alt="logo"
            className="w-[110px] cursor-pointer"
          />
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
