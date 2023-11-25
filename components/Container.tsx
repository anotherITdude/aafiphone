"use client";

import { usePathname } from "next/navigation";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const locale = usePathname();
  return (
    <div
      dir={`${locale === "/ar" ? "rtl" : "ltr"}`}
      className=" max-w-full min-h-screen
       lg:max-w-[1100px]
        mx-auto
        rounded-sm
        bg-webWhite"
    >
      {children}
    </div>
  );
};

export default Container;
