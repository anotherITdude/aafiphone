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
        <div
          className={`${locale === "/" ? "md:pr-4 mt-10" : "p-6 md:pl-4 mt-10"}`}
        >
          {locales.map((lang, index) => (
            <React.Fragment key={lang}>
              <Link
                href={lang === "en" ? "/" : `/${lang}`}
                className={`${
                  locale === `/${lang}` || (locale === "/" && lang === "en")
                    ? "text-gray-500 cursor-not-allowed underline underline-offset-4 font-Gotham-Medium"
                    : "text-red-800 cursor-pointer font-Gotham-Medium "
                }`}
              >
                {lang === "ar" ? "Ar" : "En"}
              </Link>
              {index !== locales.length - 1 && (
                <span className="font-DIN-Bold pr-1 pl-1 text-md ">
                  &#x2022;
                </span>
              )}
            </React.Fragment>
          ))}
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
